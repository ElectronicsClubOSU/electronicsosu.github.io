<svelte:head>
  	<title>Bummer</title>

		<link
			href="http://fonts.googleapis.com/css?family=Open+Sans:700"
			rel="stylesheet"
			type="text/css"
		/>
</svelte:head>

<div id="container">
  <h1>404</h1>
  <h2>There isn't anything here</h2>
</div>

<style>
  body,
  h1,
  h2 {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: 0 0;
  }

  body {
    line-height: 1;
  }

  * {
    box-sizing: border-box;
  }

  html {
    background-color: #f06060;
    color: #fff;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }

  @media screen and (max-width: 600px) {
    html {
      font-size: 10px;
    }
  }

  h1 {
    font-size: 16rem;
  }

  h2 {
    font-size: 6rem;
    color: #f48f8f;
  }
</style>
