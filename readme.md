<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Momentum App</title>
  </head>
  <body>
    <div id="header">
      <div id="weather">
        <span></span>
        <span></span>
      </div>
      <div id="logOut">Log Out</div>
    </div>
    <h2 id="clock">00:00</h2>
    <form id="login-form" class="hidden">
      <input
        id="login_input"
        required
        maxlength="15"
        type="text"
        placeholder="What is your name"
      />
      <input id="login_btn" type="submit" value="Log in" />
    </form>
    <h1 id="greeting" class="hidden"></h1>
    <form id="todo-form">
      <input
        id="todo_input"
        type="text"
        placeholder="Write Your Plan"
        required
      />
    </form>
    <ul id="todo_list"></ul>
    <div id="quote">
      <span></span>
      <span></span>
    </div>

    <script src="js/background.js"></script>
    <script src="js/greetings.js"></script>
    <script src="js/clock.js"></script>
    <script src="js/quote.js"></script>
    <script src="js/todo.js"></script>
    <script src="js/weather.js"></script>

  </body>
</html>
