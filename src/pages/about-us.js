import Navbar from '../components/navbar';
import React from "react";
import Footer from "../components/footer";


const AboutUs = () => {
  return (
      <div>
          <Navbar/>
          <section className="pt-4">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6 text-md-start text-center py-6">
                          <h1 className="mb-2 fs-9 fw-bold">Tentang Kami</h1>
                          <h3 className="mb-4 fw-bold">Memberdayakan UMKM</h3>
                          <p className="mb-6 lead text-secondary">
                              Terangnesia merupakan platform yang juga merupakan sebuah ekosistem dengan tujuan menjadi penghubung UMKM lokal dan reseller. Adanya koneksi antara UMKM dengan reseller diharapkan dapat meningkatkan pendapatan bagi UMKM, serta bertambahnya pemasukan masyarakat selaku reseller. Sebagai penggerak ekonomi terbesar bagi Indonesia, Terangnesia percaya bahwa UMKM bisa terus berkembang dengan adanya peran yang kolaboratif dengan reseller, sehingga tercipta sinergitas yang saling membangun.<br className="d-none d-xl-block" />
                              <br/>
                              Pada pertengahan tahun 2023, Terangnesia berinovasi untuk membangun ekosistem bisnis yang menghadirkan kerja sama dengan tujuan saling menguntungkan bagi reseller dan UMKM. Salah satu inovasi yang dihadirkan yaitu adanya aplikasi website Terangnesia. Menggunakan pengembangan teknologi, kami terus berusaha untuk meningkatkan kualitas ekosistem bisnis kami sehingga mampu menjadi sebuah kanal penjualan bisnis yang efektif dan efisien bagi kemajuan bisnis UMKM maupun reseller yang bergabung.
                              <br className="d-none d-xl-block" />
                              <br/>
                              Berlandaskan komitmen terhadap kemajuan UMKM, kami juga akan terus berusaha untuk senantiasa memberikan bantuan sepenuhnya kepada seluruh pihak yang ada dalam ekosistem Terangnesia untuk meraih potensi terbaiknya.
                          </p>
                      </div>
                      <div className="col-md-6 text-end">
                          <img className="pt-7 pt-md-0 img-fluid" src="https://terangnesia.sgp1.cdn.digitaloceanspaces.com/app-assets/terangnesia-logo-primary.png" alt="halo" />
                      </div>
                  </div>
              </div>
          </section>
          <section className="py-md-11 py-8" id="join-us">
              <div className="bg-holder z-index--1 bottom-0 d-none d-lg-block background-position-top" style={{backgroundImage: 'url(assets/img/superhero/oval.png)', opacity: '.5', backgroundPosition: 'top !important'}}>
              </div>
              {/*/.bg-holder*/}
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-6 text-center">
                          <h1 className="fw-bold mb-4 fs-7">Kontak Kami</h1>
                          <a href="https://wa.me/6285772932331" target="_blank">
                              <button className="btn btn-warning btn-md">Admin</button>
                          </a>
                      </div>
                  </div>
              </div>{/* end of .container*/}
          </section>
          <Footer/>
      </div>
  );
}

export default AboutUs;