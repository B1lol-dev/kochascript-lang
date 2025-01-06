# KochaScript

KochaScript — Dasturlashdan Chiqila

### Ornatw

1. Szga [Node.js](https://nodejs.org/) kere boladi.
2. install it globally:

   ```bash
   npm install kochascript -g
   ```

3. Install required dependencies:

   ```bash
   npm install
   ```

4. or Install kochascript just for your project:
   ```bash
   npm install kochascript
   ```

### Iwlatw

Yuklaganiladan keyn sz `kocha` komandasni iwlatolisz `.kocha` fayllarni oddiy `.js` fayla otkaziw (compile) uchun

#### .kocha ni .js ga compile qlw

`.kocha` ni JavaScript ga ogrw uchun, prosta mawu komanda terin:

```bash
kocha [faylga yo'l].kocha
```

Masalan:

```bash
kocha main.kocha
```

Bu komanda `main.kocha` ni `main.js` ga ogradi.

#### Avtomaticeski jsga ogrw `-w` (yoki `--watch`)

Agar `.kocha` fayllarni `.js` bittalab ogrb carcagan bosez. brat hovotr omen prosta mawuni iwlatin `-w` yoki `--watch` bu ozi avtomaticeski saqlab turadi szzi ornisga:

```bash
kocha [faylga yol].kocha -w
```

Masalan:

```bash
kocha main.kocha -w
```

### KochaScript da yozilgan kod:

**KochaScript kodi:**

```kocha
yanami pstaBomi() {
  agar (psta) {
    korsat("Pstadan ber!");
  } bomasa {
    korsat("aldama!");
    ur();
  }
}

pstaBomi();
```

**Jsga ogrlgan kod:**

```javascript
function pstaBomi() {
  if (psta) {
    console.log("Pstadan ber!");
  } else {
    console.log("aldama!");
    ur();
  }
}

pstaBomi();
```

### KochaScript sintaksisi

JavaScript bomidi uni orniga bza norm til qldi Js di sozlani ornga mawulani iwlatila

| KochaScript | JavaScript    |
| ----------- | ------------- |
| `yanami`    | `function`    |
| `agar`      | `if`          |
| `korsat`    | `console.log` |
| `test()`    | `test()`      |
| `x > 10`    | `x > 10`      |

### Almashtirilgan sozla:

| KochaScript     | JavaScript      |
| --------------- | --------------- |
| `yanami`        | `function`      |
| `agar`          | `if`            |
| `bomasa`        | `else`          |
| `choz`          | `return`        |
| `davay`         | `let`           |
| `sotmas`        | `const`         |
| `sotqin`        | `var`           |
| `class`         | `class`         |
| `yengi`         | `new`           |
| `shu`           | `this`          |
| `urun`          | `try`           |
| `oxshamasa`     | `catch`         |
| `vanihoyat`     | `finally`       |
| `ot`            | `throw`         |
| `davomEt`       | `continue`      |
| `toxta`         | `break`         |
| `almashuvchi`   | `switch`        |
| `aylana`        | `for`           |
| `holat`         | `case`          |
| `oddiy`         | `default`       |
| `ichida`        | `in`            |
| `instanceof`    | `instanceof`    |
| `typeof`        | `typeof`        |
| `bosh`          | `void`          |
| `ochir`         | `delete`        |
| `debugger`      | `debugger`      |
| `birgalida`     | `async`         |
| `kutbtur`       | `await`         |
| `yield`         | `yield`         |
| `puper`         | `super`         |
| `opke`          | `import`        |
| `obor`          | `export`        |
| `dan`           | `from`          |
| `niki`          | `of`            |
| `boshKalla`     | `null`          |
| `qattau`        | `undefined`     |
| `Sonmas`        | `NaN`           |
| `cheksizli`     | `Infinity`      |
| `ha`            | `true`          |
| `yoq`           | `false`         |
| `qachonki`      | `while`         |
| `korsat`        | `console.log`   |
| `ogohlantr`     | `console.warn`  |
| `xato`          | `console.error` |
| `ot`            | `throw`         |
| `Xato`          | `Error`         |
| `uzunli`        | `length`        |
| `xarBittasiga`  | `forEach`       |
| `qil`           | `do`            |
| `karochiKut`    | `setTimeout`    |
| `karochiQaytar` | `setInterval`   |
| `Vada`          | `Promise`       |

### Development

Agar bzaga nmadur qowmoci bosez bemalol pull request qvurin)

### Licenziya

Licenziya blmima lekn barbr nmadur yoqib qoyaman MIT. [LICENSE](LICENSE) bla-bla-bla.

### Repository

https://github.com/B1lol-dev/kochascript
