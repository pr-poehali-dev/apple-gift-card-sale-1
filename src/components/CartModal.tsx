import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("ru-RU").format(amount) + " ₽";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Корзина
            {state.items.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCart}
                className="text-red-600 hover:text-red-700"
              >
                Очистить
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {state.items.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Icon
                name="ShoppingCart"
                size={48}
                className="mx-auto mb-4 opacity-50"
              />
              <p>Корзина пуста</p>
            </div>
          ) : (
            <>
              {state.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex-1">
                    <p className="font-medium">Apple Gift Card</p>
                    <p className="text-sm text-gray-600">
                      {formatPrice(item.amount)}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Итого:</span>
                  <span className="text-lg font-bold text-blue-600">
                    {formatPrice(state.total)}
                  </span>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Оформить заказ
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
