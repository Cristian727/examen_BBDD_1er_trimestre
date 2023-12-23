# Examen

## Teoria: 

9/12, tienes claros los conceptos, está **genial**, sigue asi!

## Práctica:

Esto funciona y se ve genial!! 👏 la interfaz además es muy clara y limpia, con un buen tamaño de fuente.

Algunas reglas sueltas de CSS se podrían haber agrupado en clases o puesto de manera global, pero está muy bien. 

## Documentación:

Clara y concisa, recuerda que en markdown puedes usar 

```js
function añadir(){
    let valor = document.getElementById("valor").value;
    let elemento = document.createElement("p");
    elemento.innerHTML = valor;
    document.getElementById("resultado").appendChild(elemento);
    document.getElementById("valor").value = "";
    lista.push(valor);
    localStorage.setItem("lista", JSON.stringify(lista));
}
```

```html
<div class="container">
    <input type="text" id="valor" placeholder="Introduce un nombre">
    <button onclick="añadir()">Añadir</button>
    <button onclick="sorteo()">Sortear</button>
    <button onclick="borrar()">Borrar</button>
</div>
```

```css
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2em;
}
```

Para compartir código de forma más rápida y eficiente.

Nota: 9 