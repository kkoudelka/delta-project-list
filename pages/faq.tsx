import Head from "next/head";
import React from "react";
import { Navbar } from "../components/navbar";

const FaqPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>FAQ - Maturitní projekty - Delta SŠIE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="py-5 mt-4 container">
        <div className="p-5 text-center bg-light">
          <h1
            className="mb-3"
            data-mdb-toggle="tooltip"
            data-mdb-placement="bottom"
            title="V případě nouze lze číst jako 'fakjů'"
          >
            FAQ
          </h1>
          <h4 className="mb-3">aneb často kladené otázky zmatenými studenty</h4>
        </div>
        <div className="card my-4" id="web-root">
          <div className="card-body">
            <div className="d-flex justify-content-between mb-2">
              <h4 className="card-title">
                Chci mít web v rootu a ostatní mě bijou, že to má být na{" "}
                <code>/maturita</code>
              </h4>
              {/* <button
                className="btn btn-outline-info btn-floating clipboard"
                data-mdb-clipboard-target="#copy-web-root"
              >
                <i className="fas fa-link"></i>
              </button>
              <div id="copy-web-root" className="d-none">
                {router.route}#web-root
              </div> */}
            </div>
            <p>
              Nevím proč bys to chtěl mít takhle, ale není nic jednoduššího než
              si přidat do <code>/maturita</code> přesměrování
            </p>
            <p>
              V rootu webu vytvoříme složku <code>maturita</code>, v ní
              vytvoříme soubor <code>index.php</code> a do něj vložíme
              následující kód:
            </p>
            <p>
              <code>
                &#60;?php <br />
                header("Location: /");
              </code>
            </p>
            <p>
              <code>/maturita</code> nyní přesměrovává automaticky do rootu webu
            </p>
          </div>
        </div>
        <div className="card my-4" id="web-folder-maturita">
          <div className="card-body">
            <div className="d-flex justify-content-between mb-2">
              <h4 className="card-title">
                Jsem normální, mám web v <code>/maturita</code>, ale ostatní
                říkají, že to má být v rootu
              </h4>
              {/* <button
                className="btn btn-outline-info btn-floating clipboard"
                data-mdb-clipboard-target="#copy-folder-maturita"
              >
                <i className="fas fa-link"></i>
              </button>
              <div id="copy-folder-maturita" className="d-none">
                {router.pathname}#web-folder-maturita
              </div> */}
            </div>
            <p>
              Jsem rád, že se našel někdo normální. Pro tohle existuje
              jednoduchý fix
            </p>
            <p>
              Počítám s tím, že máš celý web v <code>/maturita</code>
            </p>
            <p>
              Tudíž o složku výš, aka v rootu vytvoříme soubor{" "}
              <code>index.php</code> a do něj vložíme následující kód:
            </p>
            <p>
              <code>
                &#60;?php <br />
                header("Location: /maturita");
              </code>
            </p>
            <p>
              <code>/</code> (root webu) nyní přesměrovává automaticky na{" "}
              <code>/maturita</code>
            </p>
          </div>
        </div>
        <div className="card my-4" id="web-https">
          <div className="card-body">
            <div className="d-flex justify-content-between mb-2">
              <h4 className="card-title">
                Spolužáci mě bijou, že nemám automaticky <code>HTTPS</code>
              </h4>
              {/* <button
                className="btn btn-outline-info btn-floating clipboard"
                data-mdb-clipboard-target="#copy-web-https"
              >
                <i className="fas fa-link"></i>
              </button>
              <div id="copy-web-https" className="d-none">
                {router.pathname}#web-https
              </div> */}
            </div>
            <div
              className="alert alert-warning"
              role="alert"
              data-mdb-color="warning"
            >
              Pokud ti nefunguje certifikát, tak před implemetací napiš panu{" "}
              <abbr title="RNDr. Jan Koupil Ph.D. (Vector, Jeník, Janek, Coupil, či Coca-Coupil)">
                Koupilovi
              </abbr>
            </div>
            <p>
              Za našich mladých let to ani možný nebylo, ale na to existuje
              taktéž jednoduchý fix
            </p>
            <p>
              Počítáme-li s tím, že používáš PHP, přidáme tento kousek kódu na
              začátek do <code>index.php</code>:
            </p>
            <p>
              <code>
                &lt;?php <br />
                if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === "off")
                &lcub;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;$location = 'https://' .
                $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;header('HTTP/1.1 301 Moved
                Permanently');
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;header('Location: ' . $location);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;exit;
                <br />
                &rcub;
                <br />
                ?&gt;
                <br />
                <br />
                &#60;!DOCTYPE html&gt;
                <br />
                &#60;html lang="cs"&gt;
                <br />
                ...
              </code>
            </p>
            <p>
              Nyní by se měla stránka automaticky přesměrovat na svou{" "}
              <code>HTTPS</code> variantu
            </p>
          </div>
        </div>
        <div className="card my-4" id="web-ftp">
          <div className="card-body">
            <div className="d-flex justify-content-between mb-2">
              <h4 className="card-title">
                Kam strčit web, aby byl na <code>/maturita</code>
              </h4>
              {/* <button
                className="btn btn-outline-info btn-floating clipboard"
                data-mdb-clipboard-target="#copy-web-ftp"
              >
                <i className="fas fa-link"></i>
              </button>
              <div id="copy-web-ftp" className="d-none">
                &lt;?php echo getCurrentUrl(); ?&gt;#web-ftp
              </div> */}
            </div>
            <div
              className="alert alert-warning"
              role="alert"
              data-mdb-color="warning"
            >
              Budeš potřebovat přístup na FTP server. Pan{" "}
              <abbr title="RNDr. Jan Koupil Ph.D. (Vector, Jeník, Janek, Coupil, či Coca-Coupil)">
                Koupil
              </abbr>{" "}
              ti určitě posílal{" "}
              <a
                href="https://student.delta-studenti.cz/course/view.php?id=329#section-6"
                target="_blank"
              >
                tutoriál
              </a>{" "}
              + přihlašovací údaje v DM na MS Teams
            </div>
            <p>
              Potom, co se dostaneš na FTP, ve složce <code>web</code> vytvoř
              složku <code>maturita</code>
            </p>
            <div className="treeview">
              <ul>
                <li>.ssh</li>
                <li>cgi-bin</li>
                <li>log</li>
                <li>private</li>
                <li>ssl</li>
                <li>tmp</li>
                <li>
                  <a>
                    <strong>web</strong> ← web root
                  </a>
                  <ul className="show">
                    <li>error</li>
                    <li>
                      <a>
                        <strong>maturita</strong>
                      </a>{" "}
                      ← sem vlož obsah webu
                    </li>
                    <li>stats</li>
                  </ul>
                </li>
                <li>webdav</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FaqPage;
