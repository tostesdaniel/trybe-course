export function greeter(name: string): string {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, heigth: number): number {
  return (base * heigth) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, heigth: number): number {
  return base * heigth;
}
