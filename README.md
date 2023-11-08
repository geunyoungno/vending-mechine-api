
# vending machine flowchart
![flowchart](https://gist.githubusercontent.com/geunyoungno/9db43e352c88a61b24df903e568971d0/raw/47f3379b55a54fc146c29b2da456ecea718a8ddd/vending-machine-flowchart.png)

## mermaid 사용
https://mermaid.js.org/ 에서 Live Editor에서 flowchart.mermaid에 있는 내용을 붙여 넣으시면 flowchart를 확인 하실 수 있습니다.
```
flowchart TD
    vendingMachineStart([자판기 시작])
    displayItems[/상품 진열/]
    selectItem[/상품 선택/]
    validateItem{상품 검증 - 수량 확인}
    executePayment{상품 결제 실행 - 결제 방법 선택}
    paymentCard[카드 결제]
    dispenseItem[상품 배출]
    vendingMachineEnd([자판기 종료])


    vendingMachineStart --> displayItems
    displayItems --> selectItem
    selectItem --> validateItem
    validateItem -->|상품 수량 존재| executePayment
    validateItem -->|상품 수량 미존재| vendingMachineEnd
    executePayment -->|카드 선택| paymentCard
    executePayment -->|현금 선택| paymentCash


    subgraph paymentCash[현금 결제]
      insertCash[/현금 입급/]
      checkCashChange{현금 거스름돈 확인}
      paymentCashSuccess[현금 결제 성공]
      paymentCashFail[현금 결제 실패]

      insertCash --> checkCashChange
      checkCashChange -->|현금 거스름돈 출금| paymentCashSuccess
      checkCashChange -->|현금 거스름돈 부족| paymentCashFail
    end
    %% paymentCash --> vendingMachineEnd
    paymentCashSuccess --> dispenseItem
    paymentCashFail -->|결제 실패 알림| vendingMachineEnd


    subgraph paymentCard[카드 결제]
      insertCard[/카드 입력/]
      validateCardBalance{카드 잔액 확인}
      paymentCardSuccess[카드 결제 성공]
      paymentCardFail[카드 결제 실패]

      insertCard --> validateCardBalance
      validateCardBalance -->|카드 잔액 존재| paymentCardSuccess
      validateCardBalance -->|카드 잔액 부족| paymentCardFail
    end
    %% paymentCard --> vendingMachineEnd
    paymentCardSuccess --> dispenseItem
    paymentCardFail -->|결제 실패 알림| vendingMachineEnd


    dispenseItem --> vendingMachineEnd
```

## operateVendingMachine 함수에서 관련 내용 구현
src/modules/operateVendingMachine.ts에서 flowchart에 따른 로직들을 확인하실 수 있습니다.

`npm run test src/modules/__tests__/vending-machine.test.ts` 을 실행하여 동작을 확인하실 수 있습니다.

# 서버 실행 방법
1. `npm run dev-ts`로 서버를 실행 할 수 있습니다.
1.1. `npm run webpack:dev`, `npm run dev`로 javascript 서버를 실행 할 수 있습니다.

2. http://localhost:8080/swagger.io 로 실행할 수 있는 API 확인할 수 있습니다.
