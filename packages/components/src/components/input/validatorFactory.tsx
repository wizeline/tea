import { FruitValidator } from './fruitValidator';
import { Validator } from './validator';

export enum ValidatorsName {
  fruit = 'fruit',
};

export function validatorFactory(name: string): Validator<any> {
  switch(name) {
    case (ValidatorsName.fruit):
      return FruitValidator;
    default:
      return defaultValidator;
  }
}

const defaultValidator: Validator<any> = {
  validate: (_x: any) => true
}
