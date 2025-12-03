<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  let color00 = "rgba(173, 216, 230, 0.6)";
  let color01 = "rgba(255, 99, 132, 0.6)";
  let color02 = "rgba(54, 162, 235, 0.6)";
  let color03 = "rgba(255, 206, 86, 0.6)";
  let color04 = "rgba(75, 192, 192, 0.6)";
  let color05 = "rgba(153, 102, 255, 0.6)";
  let color06 = "rgba(255, 159, 64, 0.6)";
  let color07 = "rgba(199, 199, 199, 0.6)";
  let color08 = "rgba(255, 87, 51, 0.6)";
  let color09 = "rgba(46, 204, 113, 0.6)";
  let color10 = "rgba(52, 73, 94, 0.6)";
  let color11 = "rgba(155, 89, 182, 0.6)";
  let color12 = "rgba(155, 200, 182, 0.6)";
  let color13 = "rgba(241, 196, 15, 0.6)";
  let color14 = "rgba(231, 76, 60, 0.6)";
  let color15 = "rgba(26, 188, 156, 0.6)";

  let canvas1, canvas2, canvas3, canvas4, canvas5, canvas6;
  let chartInst1, chartInst2, chartInst3, chartInst4, chartInst5, chartInst6;
  let errorMsg = "";

  // @ts-ignore
  onMount(async () => {
    await conversor_centiles_euros_hijos_simple();
    await conversor_centiles_euros_padres_simple();
    await distribucion_quintiles_nacional_pivot();
    await ranking_ccaa_centil_padres_20();
    await movilidad_nacional_curva_Mediana();
    await movilidad_nacional_curva_Media();
  });

  async function conversor_centiles_euros_hijos_simple() {
    const URL = "conversor_centiles_euros_hijos_simple";
    const TITLE = "Renta por centil (Hijos)";
    const response = await fetch("http://localhost:3000/api/"+URL);
    if (!response.ok) throw new Error("Error during petition");
    const json = await response.json();
    const data = json.data;

    const config = {
      type: "bar",
      data: {
        labels: data[0].map(d => d.centil),
        datasets: [
          {
            label: "Cataluna",
            data: data[0].map(d => d.renta),
            backgroundColor: color00,
          },
          {
            label: "Aragon",
            data: data[2].map(d => d.renta),
            backgroundColor: color02,
          },
          {
            label: "La Rioja",
            data: data[3].map(d => d.renta),
            backgroundColor: color03,
          },
          {
            label: "Madrid",
            data: data[4].map(d => d.renta),
            backgroundColor: color04,
          },
          {
            label: "Islas Baleares",
            data: data[5].map(d => d.renta),
            backgroundColor: color05,
          },
          {
            label: "Castilla y Leon",
            data: data[6].map(d => d.renta),
            backgroundColor: color06,
          },
          {
            label: "Castilla La Mancha",
            data: data[7].map(d => d.renta),
            backgroundColor: color07,
          },
          {
            label: "Cantabria",
            data: data[8].map(d => d.renta),
            backgroundColor: color08,
          },
          {
            label: "Galicia",
            data: data[9].map(d => d.renta),
            backgroundColor: color09,
          },
          {
            label: "Asturias",
            data: data[10].map(d => d.renta),
            backgroundColor: color10,
          },
          {
            label: "Valencia",
            data: data[11].map(d => d.renta),
            backgroundColor: color11,
          },
          {
            label: "Murcia",
            data: data[12].map(d => d.renta),
            backgroundColor: color12,
          },
          {
            label: "Extremadura",
            data: data[12].map(d => d.renta),
            backgroundColor: color13,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: TITLE
          }
        }
      }
    };
    // @ts-ignore
    if(canvas1) { chartInst1 = new Chart(canvas1, config); };
    return () => { if (chartInst1) chartInst1.destroy(); };
  }
  async function conversor_centiles_euros_padres_simple() {
    const URL = "conversor_centiles_euros_padres_simple";
    const TITLE = "Renta por centil (Padres)";
    const response = await fetch("http://localhost:3000/api/"+URL);
    if (!response.ok) throw new Error("Error during petition");
    const json = await response.json();
    const data = json.data;
    
    const config = {
      type: "bar",
      data: {
        labels: data[0].map(d => d.centil),
        datasets: [
          {
            label: "Cataluna",
            data: data[0].map(d => d.renta),
            backgroundColor: color00,
          },
          {
            label: "Aragon",
            data: data[2].map(d => d.renta),
            backgroundColor: color02,
          },
          {
            label: "La Rioja",
            data: data[3].map(d => d.renta),
            backgroundColor: color03,
          },
          {
            label: "Madrid",
            data: data[4].map(d => d.renta),
            backgroundColor: color04,
          },
          {
            label: "Islas Baleares",
            data: data[5].map(d => d.renta),
            backgroundColor: color05,
          },
          {
            label: "Castilla y Leon",
            data: data[6].map(d => d.renta),
            backgroundColor: color06,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: TITLE
          }
        }
      }
    };
    // @ts-ignore
    if(canvas2) { chartInst2 = new Chart(canvas2, config); };
    return () => { if (chartInst2) chartInst2.destroy(); };
  }
  async function distribucion_quintiles_nacional_pivot() {
    const URL = "distribucion_quintiles_nacional_pivot";
    const TITLE = "Distribucion de quintiles nacional";
    const response = await fetch("http://localhost:3000/api/"+URL);
    if (!response.ok) throw new Error("Error during petition");
    const json = await response.json();
    const data = json.data;

    const config = {
      type: "bar",
      data: {
        labels: data.map(d => d.quintil_padres),
        datasets: [
          {
            label: "0-20",
            data: data.map(d => d.cero_veinte),
            backgroundColor: color00,
          },
          {
            label: "20-40",
            data: data.map(d => d.veinte_cuarenta),
            backgroundColor: color01,
          },
          {
            label: "40-60",
            data: data.map(d => d.cuarenta_sesenta),
            backgroundColor: color02,
          },
          {
            label: "60-80",
            data: data.map(d => d.sesenta_ochenta),
            backgroundColor: color03,
          },{
            label: "80-100",
            data: data.map(d => d.ochenta_cien),
            backgroundColor: color04,
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: TITLE
          }
        }
      }
    };
    // @ts-ignore
    if(canvas3) { chartInst3 = new Chart(canvas3, config); };
    return () => { if (chartInst3) chartInst3.destroy(); };
  }
  async function ranking_ccaa_centil_padres_20() {
    const URL = "ranking_ccaa_centil_padres_20";
    const TITLE = "Media de centil por CCAA";
    const response = await fetch("http://localhost:3000/api/"+URL);
    if (!response.ok) throw new Error("Error during petition");
    const json = await response.json();
    const data = json.data;

    const config = {
      type: "bar",
      data: {
        labels: data.map(d => d.ccaa),
        datasets: [
          {
            label: "Centil hijo loess",
            data: data.map(d => d.centil_hijo_loess),
            backgroundColor: color00,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: TITLE
          }
        }
      }
    };
    // @ts-ignore
    if(canvas4) { chartInst4 = new Chart(canvas4, config); };
    return () => { if (chartInst4) chartInst4.destroy(); };
  }
  async function movilidad_nacional_curva_Mediana() {
    const URL = "movilidad_nacional_curva";
    const TITLE = "Movilidad nacional de Hijo basado en el centil del Padre (Mediana)";
    const response = await fetch("http://localhost:3000/api/"+URL);
    if (!response.ok) throw new Error("Error during petition");
    const json = await response.json();
    const data = json.data.filter(d => d.promedio !== "media");
    
    const config = {
      type: "bar",
      data: {
        labels: data.map(d => d.centil_padres),
        datasets: [
          {
            label: "Centil hijo",
            data: data.map(d => d.centil_hijo),
            backgroundColor: color00,
          },
          {
            label: "Centil hijo loess",
            data: data.map(d => d.centil_hijo_loess),
            backgroundColor: color01,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: TITLE
          }
        }
      }
    };
    // @ts-ignore
    if(canvas5) { chartInst5 = new Chart(canvas5, config); };
    return () => { if (chartInst5) chartInst5.destroy(); };
  }
  async function movilidad_nacional_curva_Media() {
    const URL = "movilidad_nacional_curva";
    const TITLE = "Movilidad nacional de Hijo basado en el centil del Padre (Media)";
    const response = await fetch("http://localhost:3000/api/"+URL);
    if (!response.ok) throw new Error("Error during petition");
    const json = await response.json();
    const data = json.data.filter(d => d.promedio !== "mediana");

    const config = {
      type: "bar",
      data: {
        labels: data.map(d => d.centil_padres),
        datasets: [
          {
            label: "Centil hijo",
            data: data.map(d => d.centil_hijo),
            backgroundColor: color00,
          },
          {
            label: "Centil hijo loess",
            data: data.map(d => d.centil_hijo_loess),
            backgroundColor: color01,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: TITLE
          }
        }
      }
    };
    // @ts-ignore
    if(canvas6) { chartInst6 = new Chart(canvas6, config); };
    return () => { if (chartInst6) chartInst6.destroy(); };
  }
</script>

<main>
  <h1>Ascensor Social</h1>
  <p>
    Las rentas se expresan con centiles. Si uno esta en el centil 100 significa 
    que esta en el 1% de las personas de su edad con mayores rentas, asi mismo 
    el centil 1 está entre el 1% con menos ingresos. 
  </p>
  
  {#if errorMsg}
    <div class="error">{errorMsg}</div>
  {/if}

  <div class="chartRow">
    <div class="chartContainer">
      <canvas bind:this={canvas1}></canvas>
    </div>
    <div class="chartContainer">
      <canvas bind:this={canvas2}></canvas>
    </div>
  </div>
  <div class="chartRow">
    <div class="chartContainer">
      <canvas bind:this={canvas3}></canvas>
    </div>
    <div class="chartContainer">
      <canvas bind:this={canvas4}></canvas>
    </div>
  </div>
  <div class="chartRow">
    <div class="chartContainer">
      <canvas bind:this={canvas5}></canvas>
    </div>
    <div class="chartContainer">
      <canvas bind:this={canvas6}></canvas>
    </div>
  </div>
</main>

<style>
  main {
    margin: 0 auto 3em auto;
    text-align: center;
    font-family: sans-serif;
  }
  .chartRow {
    display: flex;
    justify-content: space-around;
  }
  .chartContainer {
    position: relative;
    height: 400px;
    width: 50%;
    margin-top: 20px;
  }
  .error {
    color: red;
    background: #ffe6e6;
    padding: 10px;
    border-radius: 4px;
  }
</style>