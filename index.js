import Bignum from 'bn.js';

export default function bignumInc(number) {
  if (!number) return;
  return (new Bignum(number).add(new Bignum('1'))).toString();
}
