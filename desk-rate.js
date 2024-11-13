var baruin=document.getElementsByClassName("movief");
var title;
var rating;
var desc;
var y=1;
var des_pan=document.getElementById('desc_pan');
var title_pan=document.getElementById("title-pan");
// ============================================================================================================================
Array.from(baruin).forEach(function(item) {
    item.addEventListener('click', function() {
        let value=this.getAttribute('data-value')
        console.log(value);
        
        var room_numbers=localStorage.getItem("room_number");
        console.log(room_numbers+'a');
       
        if (value==1){
            if (room_numbers==2){
                anime1();}
            else if  (room_numbers==3){
                film1();}
        }
        else if (value==2){
           if(room_numbers==2){
                anime2();}
           else if (room_numbers==3){
                film2();}
            
        }
        else if (value ==3){
            if(room_numbers==2){
                anime3();}
            else if (room_numbers==3){;
                film3();}
            }
        else if (value ==4){
            if(room_numbers==2){
                anime4();}
            else if (room_numbers==3){
                film4();}
        }
        else if (value ==5){
            if(room_numbers==2){
                anime5();}
                else if (room_numbers==3){
                    film5();}
            
        }
        else if (value ==6){
            if(room_numbers==2){
                anime6();}
                else if (room_numbers==3){
                    film6();}
        }
        else if (value ==7){
            if(room_numbers==2){
                anime7();}
                else if (room_numbers==3){
                    film7();}
                }
        else if (value ==8){    
            if(room_numbers==2){
                anime8();}
                else if (room_numbers==3){
                    film8();}
        }
        else if (value ==9){
            if(room_numbers==2){
                anime9();}
                else if (room_numbers==3){
                    film9();}
        }
        else if (value ==10){
            if(room_numbers==2){
                anime10();}
                else if (room_numbers==3){
                    film10();}
        }
        else if (value ==11){
            if(room_numbers==2){
                anime11();}
                else if (room_numbers==3){
                    film11();}
        }
        else if (value ==12){
            if(room_numbers==2){
                anime12();}
                else if (room_numbers==3){
                    film12();}
        }
        else if (value ==13){
            if(room_numbers==2){
                anime13();}
                else if (room_numbers==3){
                    film13();}
        }
        else if (value ==14){
            if(room_numbers==2){
                anime14();}
                else if (room_numbers==3){
                    film14();}
        }
        else if (value ==15){
            if(room_numbers==2){
                anime15();}
                else if (room_numbers==3){
                    film15();}
        }
        else if (value ==16){
            if(room_numbers==2){
                anime16();}
                else if (room_numbers==3){
                    film16();}
        }
        else if (value ==17){
            if(room_numbers==2){
                anime17();}
                else if (room_numbers==3){
                    film17();}
        }
        else if (value ==18){
            if(room_numbers==2){
                anime18();}
                else if (room_numbers==3){
                    film18();}
        }
        else if (value ==19){
            if(room_numbers==2){
                anime19();}
                else if (room_numbers==3){
                    film19();}
        }
        else if (value ==20){
            if(room_numbers==2){
                anime20();}
                else if (room_numbers==3){
                    film20();}
        }
        else if (value ==21){
            if(room_numbers==2){
                anime21();}
                else if (room_numbers==3){
                    film21();}
        }
        else if (value ==22){
            if(room_numbers==2){
                anime22();}
                else if (room_numbers==3){
                    film22();}
        }
        else if (value ==23){
            if(room_numbers==2){
                anime23();}
                else if (room_numbers==3){
                    film23();}
        }
        else if (value ==24){
            if(room_numbers==2){
                anime24();}
                else if (room_numbers==3){
                    film24();}
        }

        tuker();
    });
});


function tuker(){
    title_pan.innerText=title;
    des_pan.innerText=desc;
}
//==========================ini buat nyimpen data setiap anime dan film======================

//==============================================================anime

function anime1(){
    title="Bluelock";
    desc="anime bola tapi graphic presentasi";
    rating ="3"
}

function anime2(){
   title="Bleach";
   desc="battle dengan story yang terus menerus menyebar";
   rating ="4"
}

function anime3(){
   title="Naruto";
   desc="Manga Naruto bercerita seputar kehidupan tokoh utamanya, Naruto Uzumaki, seorang ninja yang hiperaktif, periang, dan ambisius yang ingin mewujudkan keinginannya untuk mendapatkan gelar Hokage, pemimpin dan ninja terkuat di desanya.";
   rating ="5"
}

function anime4(){
   title="Haikyu";
   desc="Kisah anime Haikyuu berlatar seputar kehidupan anak-anak sekolah menengah pertama (SMP) di Jepang. Dikisahkan ada seorang anak bernama Shouyou Hinata (Ayumu Murase) bertubuh kecil yang gemar bermain bola voli. Ia pun menghidupkan kembali klub bola voli sekolahnya dan bergabung menjadi tim pemain inti.";
   rating ="3"
}

function anime5(){
   title="Dan Da Dan";
   desc="Seorang gadis SMA yang percaya pada hantu dan hal-hal gaib. Setelah diculik oleh alien Serpo, dia sadar kalau dia punya kekuatan psikokinetik, memungkinkan dia untuk memvisualisasikan aura dari manusia dan benda, dan memvisualisasikan kekuatannya sebagai tangan raksasa untuk meraih dan mengendalikan auranya.";
   rating ="3"
}

function anime6(){
   title="Darling in The Franxx";
   desc="Sinopsis. Anime ini berlatar pada masa depan pasca-apokaliptik ketika umat manusia";
   rating ="3"
}

function anime7(){
   title="One Piece";
   desc="One Piece merupakan karya fiksi Eiichiro Oda yang bercerita tentang seorang remaja (Luffy) yang ingin mewujudkan cita-citanya untuk mengarungi lautan dan menjadi seorang raja bajak laut.";
   rating ="3"
}

function anime8(){
   title="Detective Conan";
   desc="Detective Conan atau judul lainnya Meitantei Conan merupakan serial anime terkenal karya Gosho Aoyama. Anime yang tayang sejak tahun 90-an ini masih berlangsung hingga sekarang. Sinopsis Detective Conan mengisahkan tentang dunia kejahatan dan seorang detektif muda yang masih duduk di bangku sekolah menengah.";
   rating ="3"
}

function anime9(){
   title="Hunter X Hunter";
   desc="Mengutip Myanimelist, sinopsis Hunter x Hunter menceritakan bagaimana upaya Gon dan kawan-kawan untuk menemukan misi masing-masing dalam kompetisi hunter. Besar harapan Gon untuk bisa kembali bertemu ayahnya itu, sebab sang ayah diketahui sebagai seorang hunter andal.";
   rating ="3"
}

function anime10(){
   title="Demon Slayer Kimetsu No Yaiba";
   desc="Serial anime ini mengisahkan tentang perjalanan Tanjiro Kamado, setelah adik perempuannya bernama Nezuko Kamado telah berubah menjadi iblis dan keluarganya dibantai. Melalui kejadian itu Tanjiro memiliki tekad untuk mencari obat yang dapat mengembalikan Nezuko ke wujud manusia.";
   rating ="3"
}

function anime11(){
   title="Jujutsu Kaisen";
   desc="Sejak merilis satu musim di Netflix, Jujutsu Kaisen sudah menjadi nama populer di dunia anime, bahkan menjadi manga terlaris tahun 2022. Serial ini mengisahkan perjalanan Yuji Itadori, adalah seorang siswa SMA yang berbakat secara atletik yang tertarik dengan hal-hal berbau gaib.";
   rating ="3"
}

function anime12(){
   title="Attack On Titan";
   desc="Attack on Titan atau Shingeki no Kyojin adalah anime yang bercerita tentang Eren Jaeger dan teman-temannya yang terkurung di balik tembok raksasa. Selama lebih dari seratus tahun, manusia hidup damai di dalam tembok yang terdiri tiga tembok besar, yaitu Tembok Maria, Rose, dan Sheena.";
   rating ="3"
}

function anime13(){
   title="Zoom 100";
   desc="Zom 100: Bucket List of the Dead merupakan serial anime terbaru yang diadaptasi dari manga karya Haro Aso. Serial ini bercerita tentang seorang budak korporat yang menyambut serangan zombie dengan riang gembira";
   rating ="3"
}

function anime14(){
   title="Shíguāng Dàilǐrén";
   desc="sebuah gambar bernilai seribu kata. Dalam hal ini, gambar menyimpan rahasia yang tak terbatas. Rahasia-rahasia ini hanya dapat ditemukan oleh Cheng Xiaoshi dan Lu Guang. Di sebuah toko kecil bernama Time Photo Studio, kedua sahabat itu menyediakan layanan khusus: menggunakan kekuatan luar biasa yang memungkinkan mereka memasuki foto, mereka melompat ke dalam foto yang dibawa oleh klien untuk mengabulkan permintaan mereka. Melalui mata sang fotografer, mereka menjalani peristiwa-peristiwa di sekitar foto tersebut dan mencoba menguraikan cara untuk menyelesaikan permintaan klien mereka.Namun, setiap kali mereka melompat ke dalam sebuah foto, mereka mengambil risiko besar. Satu langkah yang salah dan mereka dapat mengubah masa depan orang yang mengambil foto itu... dan mungkin juga banyak peristiwa lainnya. Jadi, ketika peristiwa-peristiwa yang terpaksa mereka jalani dalam foto-foto ini mulai menjadi pribadi, mereka akan membutuhkan kekuatan yang sangat besar untuk mengesampingkan perasaan mereka dan fokus pada penyelesaian tugas yang menjadi tanggung jawab mereka.";
   rating ="3"
}

function anime15(){
   title="Re: Zero";
   desc="Starting Life in Another World mengisahkan ketika Subaru Natsuki (diisi suara oleh Yuusuke Kobayashi) meninggalkan toserba, hal terakhir yang dia harapkan adalah terenggut dari kehidupan sehari-harinya dan jatuh ke dunia fantasi. Hal-hal tidak terlihat baik bagi remaja yang kebingungan itu.1";
   rating ="3"
}

function anime16(){
   title="Re: Zero Season 3";
   desc="Ini didahului oleh Musim 2. Sementara musim ini hanya dikonfirmasi akan mengadaptasi Arc 5 , materi promosi untuk musim ini juga menggambarkan karakter dari Arc 6, yang menunjukkan bahwa musim ini mungkin mengadaptasi kedua arc tersebut.";
   rating ="3"
}

function anime17(){
   title="Dr Stone";
   desc="Secara garis besar, manga dr. Stone menceritakan tentang kejadian aneh yang menimpa muka bumi dan menjadi awal hancurnya peradaban manusia. Tanpa aba-aba atau pertanda, tiba-tiba saja ada sinar hijau yang menyinari bumi. Sinar hijau tersebut benar-benar menyerang seluruh penduduk bumi dan mengubah mereka menjadi batu.";
   rating ="3"
}

function anime18(){
   title="Nanatsu no Taizai";
   desc="Sinopsis komik Nanatsu No Taizai ini berkisah di kerajaan Britannia, sekelompok kesatria yang dikenal sebagai Seven Deadly Sins difitnah atas tuduhan berkhianat terhadap kerajaan. Mereka dikejar dan terpaksa berpencar, meninggalkan kehidupan mereka sebagai ksatria kerajaan.";
   rating ="3"
}

function anime19(){
   title="Tsuki Ga Michibiku";
   desc="Menceritakan tentang cerita fantasi yang berpusat di sekitar Makoto Misumi, seorang anak SMA biasa yang secara tiba-tiba dipanggil oleh sang penguasa Rembulan Tsukuyomi di kenal sebagai Tsukuyomi no Mikoto yang merupakan salah satu dari pilar mitologi Jepang.";
   rating ="3"
}

function anime20(){
   title="SAIKYOU ONMYOUJI NO ISEKAI TENSEIKI";
   desc="mengikuti perjalanan seorang Onmyouji yang kuat yang terlahir kembali di dunia baru yang misterius. Anime ini merupakan salah satu anime reinkarnasi dengan menyuguhkan kisah mendebarkan dan penuh aksi.";
   rating ="3"
}

function anime21(){
   title="Tensei Shitara Slime Datta Ken";
   desc="Mengisahkan pria berusia 37 tahun bernama Satoru Mikami yang secara tragis terbunuh dalam suatu kejadian. Namun, setelah kematiannya, ia bereinkarnasi ke dunia fantasi sebagai slime yang kuat dan tak terkalahkan. Dalam wujud barunya ini, dia dikenal sebagai Rimuru Tempest.";
   rating ="3"
}

function anime22(){
   title="Mushoko Tensei";
   desc="Mushoku Tensei, adalah kisah isekai yang berbeda dari cerita dunia fantasi pada umumnya. Mushoku Tensei manga menawarkan petualangan seru yang penuh dengan sihir, humor, dan pesan mendalam tentang penyesalan dan kesempatan untuk memulai kembali.";
   rating ="3"
}

function anime23(){
   title="Sword Art Online";
   desc="Sinopsis : “Sword Art Online (SAO)”—sebuah gim VRMMO generasi baru yang diciptakan oleh ilmuwan jenius bernama Akihiko Kayaba—adalah gim yang keji. Pemain tidak bisa log out hingga gim berhasil diselesaikan dan game over di dalam gim ini berarti “kematian” di dunia nyata.";
   rating ="3"
}

function anime24(){
   title="Tensei Kenja No Isekai Life";
   desc="Serial anime terbaru ini menarik untuk disaksikan karena mengangkat tema dunia lain yang magis atau isekai. Tensei Kenja no Isekai Life diproduksi oleh Pony Canyon dan rilis episode perdananya pada 4 Juli 2022. Anda bisa menyaksikan Tensei Kenja no Isekai Life eps 1 sub Indo pada layanan streaming legal seperti Vidio. Penasaran dengan jalan ceritanya? Sebelum nonton, simak dulu sinopsisnya berikut ini!";
   rating ="3"
}



//=============================================================film
function film1(){
    title="The Shawshank Redemption";
    desc="film yang mengisahkan tentang kebebasan dan keadilan";
    rating ="5"
}
function  film2(){
    title="The Dark Knight";
    desc="film yang mengisahkan tentang keadilan dan kebenaran";
    rating="4";}

function film3(){
    title="";
    desc="mengisahkan tentang seorang perempuan bernama Im Sol (diperankan oleh Kim Hye Yoon) yang mengalami kecelakaan serius yang membuat ia tidak bisa berjalan, Dalam keputusasaannya, Im Sol memutuskan untuk mengakhiri hidupnya.";
    rating="4";
}

function film4(){
    title="Parasite";
    desc="film yang mengisahkan tentang kehidupan masyarakat kelas bawah dan  kelas atas yang saling bergantung dan saling menghakimi";
    rating="4";
}
function film5(){
    title="The Lord of the Rings: The Return of the King";
    desc="bercerita tentang takdir dari orang-orang yang dipengaruhi oleh jiwa orang mati yang ingin hidup kembali.";
    rating="4";
}
function film6(){
    title="nga dikasi sama si member penunda";
    desc="Ketika Ahn Min Hyuk, CEO Ainsoft, sebuah perusahaan game, menyaksikan kekuatannya, ia mempekerjakannya sebagai pengawal pribadinya. Do Bong-soon (Park Bo-young) terlahir dengan kekuatan super. Kekuatannya bersifat turun-temurun dan hanya diwariskan kepada para wanita dalam keluarganya.";
    rating="4";
}
function film7(){
    title ="";
    desc="gadis SMA yang diejek karena paras yang jelek, lalu dia belajar merias wajah agar menjadi cantik.";
    rating="4";
}
function film8(){
    title="";
    desc="Kim Shin, seorang jenderal perang yang hebat di zaman kuno. Ia dibunuh oleh raja muda yang cemburu pada kehebatannya. Kim Shin akhirnya menjadi Dokkaebi (Goblin), yang memiliki kehidupan abadi.";
    title="4";
}
function film9(){
    title="";
    desc="perjalanan Lee Yeon yang merupakan gumiho (siluman rubah ekor Sembilan) yang hidup sampai di dunia modern.";
    rating="4";
}
function film10(){
    title="";
    desc="kisah cinta Shim Cheong (Jun Ji-hyun), seorang putri duyung, dan Heo Joon-jae (Lee Min-ho), seorang penipu ulung";
    rating="4";
}
function film11(){
    title="";
    desc="kisah kehidupan pasangan suami istri yang menghadapi konflik di usia tiga tahun pernikahannya.";
    rating="4";
}
function film12(){
    title="";
    desc="kisah cinta yang mengharukan antara seorang raja fiktif dari periode Joseon dan seorang dukun wanita serta konflik dan konspirasi kekuatan politik yang bersaing.";
    rating="4"    ;
}
function film13(){
    title="";
    desc="kisah Kelas 2-5 di Baekyeon Girls' High School, yang para siswanya menciptakan miniatur hierarki sosial di antara mereka sendiri.";
    rating="4";
}
function film14(){
    title="";
    desc="kehidupan siswa SMA di sekolah elite yang bernama Cheongdam International High School. Siswa yang bersekolah di sini kebanyakan adalah anak konglomerat yang memiliki pengaruh besar";
    rating="4";
}
function film15(){
    title="";
    desc="perjalanan Cha Eun-Kyung (diperankan oleh Jang Nara), seorang pengacara berpengalaman selama 17 tahun di Firma Hukum Daejung. Spesialisasinya dalam bidang hukum perceraian membuatnya menjadi salah satu pengacara terkemuka.";
    rating="4";
}
