<h1 align='center'>Hiring Test Answer</h1>
<br>
<br>

## Table Of Contents
- [Challenge](https://github.com/andreferi3/hiring-test-answer#challenge)
- [Solution](https://github.com/andreferi3/hiring-test-answer#solution)
- [Reference](https://github.com/andreferi3/hiring-test-answer#reference)

<br>

## Challenge
> Disini ada simple RN apps, dengan fitur multiple checkbox, tapi masi belum working proper checkbox nya. Kita perlu langkah2 problem solving untuk case ini.Mungkin bisa di sebutkan langkah2 yang dilakukan untuk membuat aplikasi ini working proper lagi.

Diatas adalah tantangannya, lalu setelah melihat aplikasinya, ternyata ini yang saya dapatkan 
<p align='center'>
  <img src='https://user-images.githubusercontent.com/44439185/64470853-e0888b80-d173-11e9-871a-6fa173e23631.png' width=300px alt='Screenshot_1567831830' />
</p>

<br>

Multiple Checkbox-nya tidak muncul dan tidak dapat digunakan.

<br>

## Solution
Oke, setelah itu saya mulai melakukan pengecekan code dan tidak ada masalah apa2 di App.js nya. Setelahnya saya melakukan browsing di **npmjs milik react-native-select-multiple** dan ternyata emang benar codenya sana seperti yang diperintahkan di web [react-native-select-multiple](https://github.com/tableflip/react-native-select-multiple/), tapi masih tetep blank page aja.

Setelah saya cari tau ternyata sumber permasalahannya ada di **package-nya itu sendiri** yang mana harus diberi code tambahan didalamnya, ikuti langkah2 berikut :
1. Clone github ini [hiring-tes](https://github.com/ace3/hiring-test)
2. Setelah diclone, buka folder lewat code editor (VS Code) 
3. Buka terminal/cmd difolder yang telah diclone, lalu ketik `npm install`
4. Buka file sumber di `node_modules -> react-native-select-multiple -> src -> SelectMultiple.js`
5. Lalu tambahkan code yang seperti diberi border kotak merah

<p align='center'>
  <img src='https://user-images.githubusercontent.com/44439185/64471087-cd2aef80-d176-11e9-8ad8-e5b67428cab9.png' alt='Image solution' />
</p>

6. Setelah itu save `CTRL + S`
7. Jalankan aplikasi di hpmu dengan perintah `react-native run-android`
8. Maka hasil yang akan didapatkan sekarang seperti ini

<p align='center'>
  <img src='https://user-images.githubusercontent.com/44439185/64471124-314db380-d177-11e9-8363-a86738fcc726.png' alt='Image Solution 1' width=300px />
</p>

### Happy Hacking!

## Reference
- [Added ComponentDidMount()](https://github.com/tableflip/react-native-select-multiple/pull/32/commits/3c62595a97850f05a698159ee6867bfeacbee705)
