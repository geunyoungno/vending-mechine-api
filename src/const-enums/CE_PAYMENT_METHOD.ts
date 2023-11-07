/**
 * 결제 방법
 * * CARD,card: 카드 결제
 * * CASH,cash: 현금 결제
 */
const CE_PAYMENT_METHOD = {
  CARD: 'card',
  CASH: 'cash',
} as const;

export default CE_PAYMENT_METHOD;

export type TPaymentMethod = (typeof CE_PAYMENT_METHOD)[keyof typeof CE_PAYMENT_METHOD];
