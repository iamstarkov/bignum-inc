import { equal } from 'assert';
import inc from './index';

it('should inc', () =>
  equal(inc('419999999999999999999999'), '420000000000000000000000'));

it('should inc invalid input', () =>
  equal(inc(), undefined));
