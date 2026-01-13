//populer yerlr butonu için
function acModal(idPrefix) {
    const modalId = idPrefix + 'Modal'; 
    document.getElementById(modalId).style.display = 'block'; // Modalı görünür yapar
    document.body.style.overflow = 'hidden'; 
}

// 2. Modalı Kapatma Fonksiyonu
function kapatModal(idPrefix) {
    const modalId = idPrefix + 'Modal'; 
    document.getElementById(modalId).style.display = 'none'; // Modalı gizler
    document.body.style.overflow = 'auto';
}

//------------------------------------------------------



// Fotoğrafı Büyütme Fonksiyonu
function fotoAc(kaynak) {
    const modal = document.getElementById("lightboxModal");
    const buyukResim = document.getElementById("buyukResim");
    
    modal.style.display = "block"; 
    buyukResim.src = kaynak;
    
    document.body.style.overflow = "hidden";
}

// Fotoğrafı Kapatma Fonksiyonu
function fotoKapat() {
    const modal = document.getElementById("lightboxModal");
    modal.style.display = "none"; 
    
    document.body.style.overflow = "auto";
}




// Yorum Kısmı
const gonderButonu = document.querySelector('.yorum-formu button');

gonderButonu.addEventListener('click', function(event) {
    event.preventDefault(); 

    const yorumFormu = document.querySelector('.yorum-formu');
    
    yorumFormu.innerHTML = `
        <div id="thanks-message" style="
            text-align: center; 
            padding: 40px 20px; 
            background-color: #f9f9f9; 
            border-radius: 8px; 
            border: 1px solid #ddd;">
            <i class="fas fa-check-circle" style="color: #28a745; font-size: 3rem; margin-bottom: 15px;"></i>
            <h3 style="color: #333;">Teşekkürler!</h3>
            <p style="color: #666;">Yorumunuz başarıyla iletildi.</p>
        </div>
    `;
});



// Yıldızları ve seçilen puanı 
const yildizlar = document.querySelectorAll('.derecelendirme i');
let secilenPuan = 0;

yildizlar.forEach((yildiz, index) => {
    // 1. Yıldızın üzerine gelince (Hover efekti)
    yildiz.addEventListener('mouseover', () => {
        isaretle(index);
    });

    // 2. Yıldızdan çekince (Eski haline döner)
    yildiz.addEventListener('mouseout', () => {
        isaretle(secilenPuan - 1);
    });

    // 3. Yıldıza tıklayınca (Puanı sabitler)
    yildiz.addEventListener('click', () => {
        secilenPuan = index + 1;
        console.log("Seçilen Puan: " + secilenPuan);
        isaretle(index);
    });
});

// Yıldızları boyayan yardımcı fonksiyon
function isaretle(index) {
    yildizlar.forEach((yildiz, i) => {
        if (i <= index) {
            yildiz.classList.replace('far', 'fas'); // Dolu yıldız yap
            yildiz.style.color = "#ffc107"; // Altın sarısı renk
        } else {
            yildiz.classList.replace('fas', 'far'); // Boş yıldız yap
            yildiz.style.color = ""; // Rengi sıfırla
        }
    });
}





//arama butonu
function aramaYap() {
    var input = document.getElementById('search-input');
    var kelime = input.value.toLowerCase().trim();

    //Eğer kutu gizliyse, kutuyu göster
    if (input.style.display === 'none') {
        input.style.display = 'inline-block';
        input.focus();
    } 
    //Eğer kutu açıksa ve içi doluysa sayfalara git
    else if (kelime !== "") {
        if (kelime.includes("anıtkabir") || kelime.includes("anitkabir")) {
            window.location.href = "anitkabir.html";
        } 
        else if (kelime.includes("kale")) {
            window.location.href = "ankara_kalesi.html";
        }
        else if (kelime.includes("eymir")) {
            window.location.href = "eymir.html";
        }
        else if (kelime.includes("cumhuriyet")) {
            window.location.href = "cumhuriyet.html";
        }
        else if (kelime.includes("kocatepe")) {
            window.location.href = "kocatepe.html";
        }
        else if (kelime.includes("kuğulu")) {
            window.location.href = "kugulu.html";
        }
        else if (kelime.includes("medeniyetler")) {
            window.location.href = "medeniyetler.html";
        }
        else {
            alert("Bulunamadı: " + kelime);
        }
    }
    // Kutu açık ama boşsa kapat
    else {
        input.style.display = 'none';
    }
}


