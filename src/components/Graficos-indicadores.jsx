import React from 'react';


function GraficoIndicadores() {
  return (
    <section >
      <div>
        <h2>Empresas com mais doações</h2>
        <div> Gráfico</div>
        <div>ver detalhes</div>
      </div>

      <div>
        <h2>Resumo</h2>

        <div>
          <div>
            <h3> Doações (mínimo R$3.000)</h3 >
            <span>R$ 3.853.726.767</span>

          </div>

          <div>
            <p>Total de doadores <br />
              <span>210</span>
            </p>

            <p>Maior doador: <span>Itaú</span> <br />
            R$<span>1.127.100.000</span><span>(32%)</span>
            </p>
          </div>

        </div>


        <div>
          <div>
            <h3>Capanhas Doações </h3>
            <span>R$ 278.275.247</span>

          </div>

          <div>

            <p>Total de doadores <br />
              <span>191.032</span>
            </p>

            <p>Maior Campanha: <span>Na Luta contra a COVID-19</span> <br />
            R$<span>38.144.000</span><span>(14%)</span>
            </p>

          </div>

        </div>


        <div>
          <div>
            <h3>Lives de Doações</h3> <br />
            <span>R$ 12.258.946</span>
          </div>

          <div>

            <p>Total de doadores <br />
              <span>191.032</span>
            </p>

            <p>Maior Live: <span>Fome de Música (inclui Sandy&Junior)</span> <br />
            R$<span>6.750.757</span><span>(55%)</span>
            </p>

          </div>

        </div>



      </div>

    </section>
  );
}

export default GraficoIndicadores;