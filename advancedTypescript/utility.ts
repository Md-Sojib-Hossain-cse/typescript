//utility types

type TProduct = {
  id: number;
  name: string;
  stock: number;
  price: number;
  color?: string;
};

type TProductSummary = Pick<TProduct, "id" | "name" | "price">;

type TProductWithoutStock = Omit<TProduct, "stock" | "color">;

type TProductWithColor = Required<TProduct>;

type TOptionalProduct = Partial<TProduct>;

type TProductReadOnly = Readonly<TProduct>;

const product: TProductWithColor = {
  id: 12,
  name: "Mouse",
  stock: 100,
  price: 250,
  color: "black",
};

const product1: Record<string, unknown> = {
  id: 12,
  name: "Mouse",
  stock: 100,
};
