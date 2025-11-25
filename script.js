document.addEventListener('DOMContentLoaded', () => {
    const pencemaranData = [
        {
            judul: "Pencemaran Air oleh Sampah Plastik",
            deskripsi: "Sampah plastik di sungai atau laut merusak ekosistem akuatik. Sampah ini tidak mudah terurai dan dapat membahayakan kehidupan laut yang menganggapnya sebagai makanan.",
            gambarSrc: "assets/pencemaran_plastik.jpeg" 
        },
        {
            judul: "Pencemaran Udara dari Asap Pabrik",
            deskripsi: "Asap tebal yang keluar dari cerobong pabrik melepaskan zat berbahaya (seperti sulfur dioksida) ke atmosfer, menyebabkan kabut asap (smog) dan hujan asam.",
            gambarSrc: "assets/udara_asap_pabrik.jpeg"
        },
        {
            judul: "Pencemaran Tanah dari Limbah Industri",
            deskripsi: "Pembuangan limbah beracun dan bahan kimia berbahaya (misalnya logam berat) secara sembarangan ke tanah dapat menjadikannya tidak subur dan mengontaminasi sumber air tanah.",
            gambarSrc: "assets/tanah_limbah_industri.jpeg"
        },
        {
            judul: "Pencemaran Suara di Perkotaan",
            deskripsi: "Tingkat kebisingan yang tinggi dari lalu lintas, pesawat, atau lokasi konstruksi dapat mengganggu kesehatan manusia dan hewan, menyebabkan stres, dan masalah pendengaran.",
            gambarSrc: "assets/suara_di_perkotaan.jpeg"
        },
        {
            judul: "Pencemaran Air oleh Tumpahan Minyak",
            deskripsi: "Kebocoran atau tumpahan minyak di perairan membentuk lapisan di permukaan air, menghalangi oksigen dan cahaya, serta merusak bulu burung laut dan insang ikan.",
            gambarSrc: "assets/air_tumpahan_minyak.jpeg"
        },
        {
            judul: "Pencemaran Udara dari Pembakaran Sampah Terbuka",
            deskripsi: "Praktik membakar sampah di tempat terbuka menghasilkan dioksin dan furan, yang sangat beracun dan berkontribusi terhadap pencemaran udara lokal.",
            gambarSrc: "assets/udara_sampah.jpeg"
        },
        {
            judul: "Pencemaran Tanah dari Penggunaan Pestisida Berlebihan",
            deskripsi: "Penggunaan pestisida dan pupuk kimia yang berlebihan dalam pertanian dapat meresap ke dalam tanah, merusak mikroorganisme yang bermanfaat, dan mencemari hasil panen.",
            gambarSrc: "assets/tanah_pestisida.jpeg"
        }
    ];

    const listContainer = document.getElementById('pencemaran-list');
    const toggleModeBtn = document.getElementById('toggleModeBtn');
    const tampilkanGambarBtn = document.getElementById('tampilkanGambarBtn');
    const halamanGambar = document.getElementById('halamanGambar');
    const gambarContainer = document.getElementById('gambarContainer');
    
    // --- Menampilkan Judul dan Mengatur Interaksi ---
    
    pencemaranData.forEach((data, index) => {
        // Buat elemen Judul
        const judulDiv = document.createElement('div');
        judulDiv.className = 'judul-pencemaran';
        judulDiv.innerHTML = `<h3>${index + 1}. ${data.judul}</h3>`;
        judulDiv.dataset.index = index; // Menyimpan index untuk referensi
        
        // Buat elemen Penjelasan (Awalnya tersembunyi)
        const penjelasanParagraf = document.createElement('p');
        penjelasanParagraf.className = 'penjelasan-paragraf tersembunyi';
        penjelasanParagraf.textContent = data.deskripsi;

        // Tambahkan ke container
        listContainer.appendChild(judulDiv);
        listContainer.appendChild(penjelasanParagraf);
    });

    // Menambahkan Event Listener untuk Interaksi (Hiding/Showing)
    listContainer.addEventListener('click', (event) => {
        let target = event.target;
        // Pastikan kita mengklik div judul-pencemaran (atau elemen di dalamnya)
        while (target && !target.classList.contains('judul-pencemaran')) {
            target = target.parentElement;
        }

        if (target && target.classList.contains('judul-pencemaran')) {
            const index = target.dataset.index;
            const penjelasan = listContainer.children[parseInt(index) * 2 + 1]; 

            // Cek apakah paragraf sedang ditampilkan
            if (penjelasan.classList.contains('tersembunyi')) {
                // Tampilkan pertanyaan konfirmasi sebelum menampilkan
                const tampilkan = confirm(`Apakah Anda ingin menampilkan penjelasan "${target.querySelector('h3').textContent}" ini?`);
                if (tampilkan) {
                    penjelasan.classList.remove('tersembunyi');
                }
            } else {
                // Tampilkan pertanyaan konfirmasi sebelum menyembunyikan
                const sembunyikan = confirm(`Apakah Anda ingin menyembunyikan penjelasan "${target.querySelector('h3').textContent}" ini?`);
                if (sembunyikan) {
                    penjelasan.classList.add('tersembunyi');
                }
            }
        }
    });

    // --- Mengubah Mode Tampilan ---
    toggleModeBtn.addEventListener('click', () => {
        const body = document.body;
        const isRapi = body.classList.contains('mode-rapi');

        if (isRapi) {
            body.classList.remove('mode-rapi');
            body.classList.add('mode-berantakan');
            toggleModeBtn.textContent = 'Ubah Mode Tampilan (Saat Ini: Berantakan)';
        } else {
            body.classList.remove('mode-berantakan');
            body.classList.add('mode-rapi');
            toggleModeBtn.textContent = 'Ubah Mode Tampilan (Saat Ini: Rapi)';
        }
    });

    // --- Menampilkan Gambar ---
    tampilkanGambarBtn.addEventListener('click', () => {
        
        if (halamanGambar.classList.contains('tersembunyi')) {
            halamanGambar.classList.remove('tersembunyi');
            tampilkanGambarBtn.textContent = 'Sembunyikan Gambar';
            
            
            if (gambarContainer.children.length === 0) {
                pencemaranData.forEach(data => {
                    const card = document.createElement('div');
                    card.className = 'pencemaran-card';
                    
                    card.innerHTML = `
                        <img src="${data.gambarSrc}" alt="${data.judul}">
                        <p>${data.judul}</p>
                    `;
                    gambarContainer.appendChild(card);
                });
            }
        } else {
            halamanGambar.classList.add('tersembunyi');
            tampilkanGambarBtn.textContent = 'Tampilkan Gambar 7 Pencemaran';
        }
    });
});