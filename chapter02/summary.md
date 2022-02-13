# 실행 컨텍스트
- 실행 컨텍스트란 실행할 코드 관련 환경 정보를 모아놓은 객체이다.

## 콜스택
- 실행 컨텍스트는 콜스택에 쌓여가며 맨위에 있는 컨텍스트 관련 코드가 실행된다. 
- 콜스택은 스택으로 LIFO형태의 자료구조이다.

## 실행 컨텍스트 구조
- variableEnvironment, LexicalEnvironment, thisBinding이 있다.

### variableEnvironment
- 최초 실행 시에 environmentRecord(컨텍스트의 식별자 정보 - 파라미터, 함수, 변수..), outerEnvironmentReference(외부 컨텍스트 정보)만 저장한다.
- 최초의 snapshot만 저장되어있다.

### LexicalEnvironment
- 코드가 실행됨에 따라 변경된 environmentRecord, outerEnvironmentReference를 저장하고 있다.
- 최초에 코드가 실행되면 variableEnvironment에 실행컨텍스트 관련 정보(environmentRecord, outerEnvironmentReference)가 저장되고 해당 정보를 LexicalEnvironment에 복사한다. 그 이후엔 LexicalEnvironment의 정보를 이용한다.

### environmentRecord
- 현재 컨텍스트와 관련된 식별자 정보를 저장한다. (파라미터, 함수, 변수)
- 코드가 실행되기 전에 식별자의 정보를 먼저 수집한다.
  - 코드가 실행되기 전에 식별자 정보를 알고 있기에 **코드 실행전 변수를 모두 파일 가장 위로 올린다는 호이스팅** 이라고 가상적으로 설명하기도 한다.
  - 그러나 실제 동작하는 방식은 **현재 컨텍스트 관련 코드 실행전 식별자의 정보를 environmentRecord에 모두 저장해놓는다**이다.

> environmentRecord는 식별자에만 관심이 있지 해당 변수에 어떤 값이 할당되는지는 관심이 없다.
  