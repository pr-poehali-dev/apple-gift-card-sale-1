import { createContext, useContext, useReducer, ReactNode } from "react";

interface CartItem {
  id: string;
  amount: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { amount: number } }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const id = `apple-card-${action.payload.amount}`;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
        return {
          items: updatedItems,
          total: updatedItems.reduce(
            (sum, item) => sum + item.amount * item.quantity,
            0,
          ),
        };
      }

      const newItems = [
        ...state.items,
        { id, amount: action.payload.amount, quantity: 1 },
      ];
      return {
        items: newItems,
        total: newItems.reduce(
          (sum, item) => sum + item.amount * item.quantity,
          0,
        ),
      };
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        items: newItems,
        total: newItems.reduce(
          (sum, item) => sum + item.amount * item.quantity,
          0,
        ),
      };
    }

    case "UPDATE_QUANTITY": {
      const updatedItems = state.items
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0);

      return {
        items: updatedItems,
        total: updatedItems.reduce(
          (sum, item) => sum + item.amount * item.quantity,
          0,
        ),
      };
    }

    case "CLEAR_CART":
      return { items: [], total: 0 };

    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addItem: (amount: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  isInCart: (amount: number) => boolean;
  getItemQuantity: (amount: number) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  const addItem = (amount: number) => {
    dispatch({ type: "ADD_ITEM", payload: { amount } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const getItemCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  const isInCart = (amount: number) => {
    const id = `apple-card-${amount}`;
    return state.items.some((item) => item.id === id);
  };

  const getItemQuantity = (amount: number) => {
    const id = `apple-card-${amount}`;
    const item = state.items.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getItemCount,
        isInCart,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
