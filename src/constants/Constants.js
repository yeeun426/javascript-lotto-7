const LOTTO_INPUT = Object.freeze({
  LOTTO_PRICE_INPUT: "구입금액을 입력해 주세요.\n",
  LOTTO_WIN_INPUT: "당첨 번호를 입력해 주세요.\n",
  LOTTO_BONUS_INPUT: "보너스 번호를 입력해 주세요.\n",
});

const LOTTO_OUTPUT = Object.freeze({
  LOTTO_CNT_OUTPUT: (lottoCnt) => `${lottoCnt}개를 구매했습니다.`,
});

export { LOTTO_INPUT, LOTTO_OUTPUT };