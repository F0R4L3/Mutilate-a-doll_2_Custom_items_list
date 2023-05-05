<script>
  export var id;
  export var label;
  export var name;
  export var contentType;
  export var content;
  export var permalink;
  export var tab_contents_url;
  export var tab_link;
  export var externally_submitted;
  export var author;
  export var desc;
  export var rating;
  export var loads;

  let [
    label_tooltip,
    author_tooltip,
    permalink_tooltip,
    load_tooltip,
    star_tooltip
  ] = [false, false, false, false, false];
  let mouseX = 0;
  let mouseY = 0;
  let current = "foo";
</script>
<!-- {custom_items[0].content}-->
<div class="card w-80 h-48 rounded-lg m-3 flex flex-col" on:click>
    <p class="card-name text-white bg-[]">Name: {name}</p><!-- InnerHTML => {custom_items[0].name}-->
    <div class="card-info w-[98%] m-1 rounded-md flex flex-col justify-between" style="height: 80%;">
      {#if desc}
      <span class="text-white">Description: {desc}</span>
      {:else}
      <span class="text-white">Description: The author does not provide any description.. what a dick</span>
      {/if}
      <div class="card-info-additional w-[98%] m-1 rounded-md flex flex-row content-normal justify-between px-14">
        <!-- Add If-else statement, if Label are Doll, or any. Show SVG-->
        {#if label === 'doll'}
        <svg on:mouseover={(event) => {label_tooltip = true;mouseX = event.clientX;mouseY = event.clientY;}} on:mouseout={()=>{label_tooltip = false}} width="20px" height="20px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(9.120000000000001,9.120000000000001), scale(0.24)"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"> <path d="M10 2h4v4h-4V2zM3 7h18v2h-6v13h-2v-6h-2v6H9V9H3V7z" fill="#e6d789"></path> </g></svg>
          {#if label_tooltip}
            <div class="tooltip w-[98%] m-1 rounded-md" style={`position: absolute; left: ${mouseX}px; top: ${mouseY}px;color:white;`}>
              Label: {label}
            </div>
          {/if}
        {:else if label === 'misc'}
        <svg on:mouseover={(event) => {label_tooltip = true;mouseX = event.clientX;mouseY = event.clientY;}} on:mouseout={()=>{label_tooltip = false}} fill="#47A44C" width="20px" height="20px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#47A44C"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24ZM80,140a12,12,0,1,1,12-12A12.0006,12.0006,0,0,1,80,140Zm48,0a12,12,0,1,1,12-12A12.0006,12.0006,0,0,1,128,140Zm48,0a12,12,0,1,1,12-12A12.0006,12.0006,0,0,1,176,140Z"></path> </g></svg>
          {#if label_tooltip}
            <div class="tooltip w-[98%] m-1 rounded-md" style={`position: absolute; left: ${mouseX}px; top: ${mouseY}px;color:white;`}>
              Label: {label}
            </div>
          {/if}
        {:else if label === 'gun'}
        <svg on:mouseover={(event) => {label_tooltip = true;mouseX = event.clientX;mouseY = event.clientY;}} on:mouseout={()=>{label_tooltip = false}} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.003 512.003" xml:space="preserve" width="20px" height="20px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#3d3d3d;" d="M12.803,179.201v-102.4h153.6v38.4c0,7.057,5.743,12.8,12.8,12.8h102.4c7.057,0,12.8-5.743,12.8-12.8 v-38.4h204.8v102.4H12.803z"></path> <g> <polygon style="fill:#3d3d3d 3C3C3C;" points="11.301,460.801 36.901,230.401 12.803,230.401 12.803,179.201 499.203,179.201 499.203,230.401 165.063,230.401 139.463,460.801 "></polygon> <rect x="166.403" y="76.801" style="fill:#3d3d3d 3C3C3C;" width="128" height="51.2"></rect> </g> <g> <path style="fill:#3d3d3d;" d="M486.403,64.001h-12.8c7.074,0,12.8-5.726,12.8-12.8s-5.726-12.8-12.8-12.8h-51.2 c-7.074,0-12.8,5.726-12.8,12.8s5.726,12.8,12.8,12.8h-371.2v-12.8c0-7.074-5.726-12.8-12.8-12.8s-12.8,5.726-12.8,12.8v12.8 c-14.14,0-25.6,11.46-25.6,25.6v128c0,13.133,9.882,23.953,22.613,25.429L0.156,445.177c-0.802,7.236,1.51,14.473,6.366,19.9 c4.864,5.427,11.802,8.525,19.081,8.525h102.4c13.047,0,24.004-9.813,25.446-22.775l11.691-105.225h116.463 c12.834,0,23.68-9.498,25.378-22.221l10.24-76.8c0.154-1.143-0.265-2.236-0.273-3.379h169.455c14.14,0,25.6-11.46,25.6-25.6v-128 C512.003,75.462,500.542,64.001,486.403,64.001z M179.203,89.601h102.4v25.6h-102.4V89.601z M281.603,320.001H167.981l5.837-52.565 c14.302,23.305,46.43,39.765,69.385,39.765c7.074,0,12.8-5.726,12.8-12.8s-5.726-12.8-12.8-12.8c-19.746,0-51.2-20.966-51.2-38.4 h99.84L281.603,320.001z M486.403,217.601h-194.56H158.407h-4.804l-25.6,230.4h-102.4l2.842-25.6h61.158 c7.074,0,12.8-5.726,12.8-12.8s-5.726-12.8-12.8-12.8H31.294l2.842-25.6h63.147c7.074,0,12.8-5.726,12.8-12.8 s-5.726-12.8-12.8-12.8H36.978l2.842-25.6h65.143c7.074,0,12.8-5.726,12.8-12.8c0-7.074-5.726-12.8-12.8-12.8H42.669l8.533-76.8 h-25.6v-25.6h460.8V217.601z M486.403,166.401h-460.8v-76.8h128v25.6c0,14.14,11.46,25.6,25.6,25.6h102.4 c14.14,0,25.6-11.46,25.6-25.6v-25.6h179.2V166.401z"></path> <path style="fill:#3d3d3d;" d="M115.203,115.201h-51.2c-7.074,0-12.8,5.726-12.8,12.8s5.726,12.8,12.8,12.8h51.2 c7.074,0,12.8-5.726,12.8-12.8S122.277,115.201,115.203,115.201z"></path> </g> </g></svg>
          {#if label_tooltip}
            <div class="tooltip w-[98%] m-1 rounded-md" style={`position: absolute; left: ${mouseX}px; top: ${mouseY}px;color:white;`}>
              Label: {label}
            </div>
          {/if}
        {:else if label === 'meele'}
        <svg on:mouseover={(event) => {label_tooltip = true;mouseX = event.clientX;mouseY = event.clientY;}} on:mouseout={()=>{label_tooltip = false}} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" width="20px" height="20px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#303030;" d="M187.592,238.463L28.854,397.2c-15.429,15.429-15.429,40.444,0,55.873l47.355,47.355 c15.429,15.429,40.444,15.429,55.873,0L290.82,341.691L187.592,238.463z"></path> <path style="fill:#5e5e5e;" d="M53.518,477.737l186.675-186.675l-52.601-52.601L28.854,397.2c-15.429,15.429-15.429,40.444,0,55.873 L53.518,477.737z"></path> <path style="fill:#C2C2C2;" d="M369.259,94.258L463.517,0c91.477,91.477-47.313,216.306-47.313,216.306L290.82,341.69 L187.592,238.462L332.428,93.626L369.259,94.258z"></path> <g> <rect x="129.839" y="349.836" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 21.1287 739.7675)" style="fill:#424242;" width="67.873" height="31.343"></rect> <rect x="165.66" y="314.013" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 107.6091 703.9428)" style="fill:#424242;" width="67.873" height="31.343"></rect> <rect x="94.022" y="385.65" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -65.3394 775.5784)" style="fill:#424242;" width="67.872" height="31.343"></rect> <rect x="58.207" y="421.459" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -151.7994 811.3841)" style="fill:#424242;" width="67.873" height="31.343"></rect> </g> <path style="fill:#EAEAEA;" d="M463.517,0l-94.258,94.258l-36.832-0.631L187.591,238.463l62.291,62.291L493.626,57.01 C490.7,37.518,481.622,18.106,463.517,0z"></path> <rect x="115.785" y="274.398" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 203.2424 664.3241)" style="fill:#424242;" width="246.844" height="31.343"></rect> </g></svg>
          {#if label_tooltip}
            <div class="tooltip w-[98%] m-1 rounded-md" style={`position: absolute; left: ${mouseX}px; top: ${mouseY}px;color:white;`}>
              Label: {label}
            </div>
          {/if}
        {:else if label === 'environment'}
        <svg on:mouseover={(event) => {label_tooltip = true;mouseX = event.clientX;mouseY = event.clientY;}} on:mouseout={()=>{label_tooltip = false}} fill="#47A44C" width="20px" height="20px" viewBox="0 0 32 32" id="OBJECT" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M28,25H25V21.92A7,7,0,0,0,31,15c0-3.46-2.79-12-7-12a3.52,3.52,0,0,0-2.07.73A30.55,30.55,0,0,1,25,15a9,9,0,0,1-3,6.7,7.84,7.84,0,0,0,1,.23V25H17V21.92A7,7,0,0,0,23,15c0-3-2.55-14-7-14S9,12,9,15a7,7,0,0,0,6,6.92V25H9V21.93a7.84,7.84,0,0,0,1-.23A9,9,0,0,1,7,15,30.55,30.55,0,0,1,10.07,3.73,3.52,3.52,0,0,0,8,3C3.79,3,1,11.54,1,15a7,7,0,0,0,6,6.92V25H4a3,3,0,0,0-3,3v2a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1V28A3,3,0,0,0,28,25Z"></path></g></svg>
        {#if label_tooltip}
            <div class="tooltip w-[98%] m-1 rounded-md" style={`position: absolute; left: ${mouseX}px; top: ${mouseY}px;color:white;`}>
              Label: {label}
            </div>
          {/if}
        {:else}
        <svg on:mouseover={(event) => {label_tooltip = true;mouseX = event.clientX;mouseY = event.clientY;}} on:mouseout={()=>{label_tooltip = false}} height="20px" width="20px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">
  .st0 {
    fill: #ffffff;
  }
</style> <g> <path class="st0" d="M396.138,85.295c-13.172-25.037-33.795-45.898-59.342-61.03C311.26,9.2,280.435,0.001,246.98,0.001 c-41.238-0.102-75.5,10.642-101.359,25.521c-25.962,14.826-37.156,32.088-37.156,32.088c-4.363,3.786-6.824,9.294-6.721,15.056 c0.118,5.77,2.775,11.186,7.273,14.784l35.933,28.78c7.324,5.864,17.806,5.644,24.875-0.518c0,0,4.414-7.978,18.247-15.88 c13.91-7.85,31.945-14.173,58.908-14.258c23.517-0.051,44.022,8.725,58.016,20.717c6.952,5.941,12.145,12.594,15.328,18.68 c3.208,6.136,4.379,11.5,4.363,15.574c-0.068,13.766-2.742,22.77-6.603,30.442c-2.945,5.729-6.789,10.813-11.738,15.744 c-7.384,7.384-17.398,14.207-28.634,20.479c-11.245,6.348-23.365,11.932-35.612,18.68c-13.978,7.74-28.77,18.858-39.701,35.544 c-5.449,8.249-9.71,17.686-12.416,27.641c-2.742,9.964-3.98,20.412-3.98,31.071c0,11.372,0,20.708,0,20.708 c0,10.719,8.69,19.41,19.41,19.41h46.762c10.719,0,19.41-8.691,19.41-19.41c0,0,0-9.336,0-20.708c0-4.107,0.467-6.755,0.917-8.436 c0.773-2.512,1.206-3.14,2.47-4.668c1.29-1.452,3.895-3.674,8.698-6.331c7.019-3.946,18.298-9.276,31.07-16.176 c19.121-10.456,42.367-24.646,61.972-48.062c9.752-11.686,18.374-25.758,24.323-41.968c6.001-16.21,9.242-34.431,9.226-53.96 C410.243,120.761,404.879,101.971,396.138,85.295z"></path> <path class="st0" d="M228.809,406.44c-29.152,0-52.788,23.644-52.788,52.788c0,29.136,23.637,52.772,52.788,52.772 c29.136,0,52.763-23.636,52.763-52.772C281.572,430.084,257.945,406.44,228.809,406.44z"></path> </g> </g></svg>
          {#if label_tooltip}
            <div class="tooltip w-[98%] m-1 rounded-md" style={`position: absolute; left: ${mouseX}px; top: ${mouseY}px;color:white;`}>
              Label: Unknown
            </div>
          {/if}
        {/if}
        <a on:mouseover={(event) => {permalink_tooltip = true;mouseX = event.clientX;mouseY = event.clientY;}} on:mouseout={()=>{permalink_tooltip = false}} href={permalink}>
          {#if permalink_tooltip}
            <div class="tooltip w-[98%] m-1 rounded-md" style={`position: absolute; left: ${mouseX}px; top: ${mouseY}px;color:white;`}>
              Permalink: {permalink}
            </div>
          {/if}
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#4490D2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Link"> <path id="Vector" d="M9.1718 14.8288L14.8287 9.17192M7.05086 11.293L5.63664 12.7072C4.07455 14.2693 4.07409 16.8022 5.63619 18.3643C7.19829 19.9264 9.7317 19.9259 11.2938 18.3638L12.7065 16.9498M11.2929 7.05L12.7071 5.63579C14.2692 4.07369 16.8016 4.07397 18.3637 5.63607C19.9258 7.19816 19.9257 9.73085 18.3636 11.2929L16.9501 12.7071" stroke="#4490D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
        </a>
        <svg on:mouseover={(event) => {author_tooltip = true;mouseX = event.clientX;mouseY = event.clientY;}} on:mouseout={()=>{author_tooltip = false}} width="20px" height="20px" fill="#47A44C" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path></g></svg>
        {#if author_tooltip}
        <div class="tooltip w-[98%] m-1 rounded-md" style={`position: absolute; left: ${mouseX}px; top: ${mouseY}px;color:white;`}>
          Author: {author}
        </div>
        {/if}
        <svg on:mouseover={(event) => {load_tooltip = true;mouseX = event.clientX;mouseY = event.clientY;}} on:mouseout={()=>{load_tooltip = false}} width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#AF3D45"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="download"> <g> <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#AF3D45" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> <g> <polyline data-name="Right" fill="none" id="Right-2" points="7.9 12.3 12 16.3 16.1 12.3" stroke="#AF3D45" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#AF3D45" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="2.7" y2="14.2"></line> </g> </g> </g> </g> </g></svg>
        {#if load_tooltip}
        <div class="tooltip w-[98%] m-1 rounded-md" style={`position: absolute; left: ${mouseX}px; top: ${mouseY}px;color:white;`}>
          Loaded: {loads} times
        </div>
        {/if}
        <svg on:mouseover={(event) => {star_tooltip = true;mouseX = event.clientX;mouseY = event.clientY;}} on:mouseout={()=>{star_tooltip = false}} width="20px" height="20px" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#BCBC4F" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"></path> </g></svg>
                {#if star_tooltip}
        <div class="tooltip w-[98%] m-1 rounded-md" style={`position: absolute; left: ${mouseX}px; top: ${mouseY}px;color:white;`}>
          Rating: {rating}
        </div>
        {/if}
      </div>
    </div> 
</div>

<style>
  @font-face {
    font-family: "khulabold";
    src: url("/font/khula-bold-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: "khulabold";
  }

  .card {
    background: #222222;
    cursor: pointer;
    border-color: #333333;
    border-style: solid;
    border-width: 0px;
    transition: all 0.5s ease-in;
  }

  .card:hover {
    border-color: #333333;
    border-style: solid;
    border-width: 2px;
  }

  .card:active {
    border-color: #4ebc55;
    border-width: 4px;
    box-shadow: inset 0 0 90px 60px #4ebc55;
    transition: all 0s ease-out;
  }

  .card-name {
    background-color: #151515;
    border-width: 1px;
    border-style: solid;
    border-color: #333333;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding-left: 5px;
  }

  .card-info {
    background-color: #000;
  }

  .card-info-additional {
    background-color: #222222;
  }

  .tooltip {
    background-color: #1e1e1e;
    border-color: #333333;
    border-width: 1px;
    border-style: solid;
		width:auto;
  }
</style>