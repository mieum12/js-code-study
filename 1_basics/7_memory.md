# 메모리란?

## CPU

실제 계산을 하는 영역, 연산

## Memory

데이터를 저장하는 영역
memory cell(1 bite) 단위로 이루어져있다.
memory cell은 각각의 주소가 존재한다.
각각의 메모리 셀에 데이터를 저장할 수 있다.

let cal = 2 + 5 작업을 할 때
CPU에서 메모리에서 2와 5를 가져와 연산을 한다 -> 7이라는 값을 뱉어내고 메모리셀에 저장한다.

메모리라는 것은 한 운영 체제 안에서 실행되는 모든 프로그램이 공용으로 사용하는 공간이다.
직접적으로 메모리 주소를 사용해서 모든 메모리 공간에 자유롭게 접근한다면 위험하다.
중요한 메모리 공간을 삭제하거나 변경이 된다면 큰 문제가 생길 수 있다.
따라서 우리가 사용할 메모리 공간에 이름을 붙여놓은 것이 바로 '변수'이다.
예를 들면 let cal = 2 + 5 여기서 cal이라는 변수.
프로그램에서는 만들어낸 변수에만 접근이 가능하니까
다른 프로그램에서 사용중인 메모리에 접근을 막을 수 있다.
메모리 주소를 따로 외울 필요가 없다는 장점도 있다
이것이 변수를 선언하는 이유이다.
