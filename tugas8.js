function panggilObject(){
    var baju = {
        warna: 'putih',
        warna2: 'hitam',
        ukuran: 'm',
        harga: 300000
    }

    console.log(baju);
    baju.ukuran = 'xl';
    console.log(baju);
}

panggilObject();