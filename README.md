# javascript-lotto-precourse

## 구현할 기능 목록

- [x] 로또 구입 금액을 입력 받는다.
- [x] 로또 당첨 번호를 입력 받는다.
  - [x] 보너스 번호를 입력 받는다.
- [x] 발행한 로또 수량을 출력한다.
  - [x] 로또 수량 = 로또 구입 금액 / 1000
- [x] 중복되지 않는 6개의 숫자로 이뤄진 로또 번호를 구한다.
- [x] 발행한 수량만큼 로또 번호를 출력한다.
- [x] 1~5등까지의 당첨 내역을 계산한다.
  - [x] 몇개의 숫자가 일치하는지 계산한다.
  - [x] 당첨 내역을 출력한다.
- [x] 수익률을 계산한다.
  - [x] 수익률을 출력한다.
- [ ] 구현한 기능에 대한 단위 테스트를 작성한다.

## 예외 처리

- [ ] 로또 구입 금액이 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
  - [ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.
- [ ] 로또 구입 금액이 숫자가 아닌 경우 예외 처리한다.
  - [ERROR] 로또 구입 금액은 1,000원 단위의 숫자여야 합니다.
- [ ] 당첨 번호 입력 시, 숫자 범위(1~45)가 아닌 경우 예외 처리한다.
- [ ] 보너스 번호 입력 시, 숫자 범위(1~45)가 아닌 경우 예외 처리한다.
  - [ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.
- [ ] 당첨 번호 입력 시, 쉼표(,)를 기준으로 구분하지 않은 경우 예외 처리한다.
  - [ERROR] 로또 번호는 쉼표(,)를 기준으로 구분해야 합니다.
- [ ] 당첨 번호 입력 시, 숫자가 아닌 값을 입력한 경우 예외처리 한다.
- [ ] 보너스 번호 입력 시, 숫자가 아닌 값을 입력한 경우 예외처리 한다.
  - [ERROR] 로또 번호는 숫자를 입력해야 합니다.
- [ ] 당첨 번호 입력 시, 입력한 번호가 6개가 아닌 경우 예외처리 한다.
  - [ERROR] 로또 번호는 6개의 숫자를 뽑아야 합니다.
- [ ] 당첨 번호 입력 시, 입력한 번호가 중복되는 경우 예외 처리한다.
- [ ] 보너스 번호 입력 시, 입력한 번호가 중복되는 경우 예외 처리한다.
  - [ERROR] 당첨 번호 추첨 시 6개의 숫자와 보너스번호 1개가 중복되지 않아야 합니다.
- [ ] 보너스 번호 입력 시, 입력한 번호가 1개가 아닌 경우 예외 처리한다.
  - [ERROR] 보너스 번호는 1개를 입력해야 합니다.
