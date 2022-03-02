import React from 'react'

const Login = () => {
  return (
    <section class="adminIndex">

        {/* <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link" href="/libro/new">Crear libro</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/user/new">Dar de alta usuarios</a>
                </li>
            </ul>*/}

        <section class="mainContent">
            <form method="post">
                {/*{% if error %}
                    <div class="alert alert-danger">{{ error.messageKey|trans(error.messageData, 'security') }}</div>
                {% endif %}*/}
            
                {/*{% if app.user %}
                    <div class="mb-3">
                        You are logged in as {{ app.user.username }}, <a href="{{ path('app_logout') }}">Logout</a>
                    </div>
                {% endif %}*/}
                
                <h1 class="h3 mb-3 font-weight-normal">Log In</h1>
                <div class="form-group">
                    <label for="inputUsername">Nombre </label>
                    <input type="text" value="" name="username" id="inputUsername" class="form-control" autocomplete="username" required autofocus/>
                </div>
                <div class="form-group">
                    <label for="inputPassword">Contraseña</label>
                    <input type="password" name="password" id="inputPassword" class="form-control" autocomplete="current-password" required/>
                </div>
                <input type="hidden" name="_csrf_token" value="{{ csrf_token('authenticate') }}"/>
            
                {/*
                    Uncomment this section and add a remember_me option below your firewall to activate remember me functionality.
                    See https://symfony.com/doc/current/security/remember_me.html
            
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" name="_remember_me"> Remember me
                        </label>
                    </div>
                */}
            
                <button class="btn btn-lg btn-primary" type="submit">
                    Entrar
                </button>
            </form>

            <section class="libros">
                <h1>ajdhalsdjalkdjalkajlak</h1>
                <p>lorem</p>
                <p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p><p>lorem</p>

            </section>
        </section>
    </section>
  )
}

export default Login