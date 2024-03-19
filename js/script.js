let frm = document.getElementById('online');
let Jabatan = ["Manager", "Asisten Manager", "Staff"];
let pilihJabatan = `<option value=""> Pilihan Jabatan ----</option>`;
for(let p in Jabatan){
    pilihJabatan += `<option value="${Jabatan[p]}">${Jabatan[p]}</option>`;
}
frm.Jabatan.innerHTML = pilihJabatan;
let Status = ["Sudah Menikah", "Belum Menikah"];
let pilihStatus = `<option value=""> Pilihan Status ----</option>`;
for(let s in Status){
    pilihStatus += `<option value="${Status[s]}">${Status[s]}</option>`;
}
frm.Status.innerHTML = pilihStatus;

function transaksi(){
    let nama = frm.nama.value;
    let Jabatan = frm.Jabatan.value;
    let Status = frm.Status.value;

    let gaji;

    if (Jabatan == "Manager") {
        gaji = 15000000;
      } else if (Jabatan == "Asisten Manajer") {
        gaji = 10000000;
      } else if (Jabatan == "Staff") {
        gaji = 5000000;
      } else {
        gaji = 0;
      }
      
      const tunjanganJabatan = 0.15 * gaji;
      const BPJS = 0.10 * gaji;
      
      var tunjanganKeluarga = (status == "Sudah Menikah") ? 0.20 * gaji : 0;
      var totalGaji = gaji + tunjanganJabatan - BPJS + tunjanganKeluarga;
      
    
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question",
        html: `
        Nama Pegawai : ${nama}, <br>
        Jabatan Pegawai :  ${Jabatan}, <br>
        Status Pegawai :  ${status}, <br>
        Gaji Pokok Pegawai :  ${gaji}, <br>
        Tunjangan Jabatan :  ${tunjanganJabatan}, <br>
        BPJS :  ${BPJS}, <br>
        Tunjangan Keluarga :  ${tunjanganKeluarga}, <br>
        Total Gaji :  ${totalGaji}, <br>
        `
     });
// `);
    }