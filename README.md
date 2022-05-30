# ToolTip

### Descripción
Funcionalidad para cargar contenido de ayuda visual dentro de una página.

### Función

#### `loadToolTip(element, toolWidth)`
**Descripción**

La función permite reconocer los eventos hover que se hacen en el elemento que desplegará el tooltip. También determina cuando el puntero sale de los elementos de despliegue y el tooltip.

**Parámetros**

- **element** *(object)* : elemento que activa el despliegue del tooltip.
- **toolWidth** *(number)* : medida de la longitud que contendrá el tooltip en pixeles.

**Ejemplo de uso**
El elemento HTML tiene que contener como nombre de la propiedad `name` el id del elemento que desplegará en este caso `tool1`. El elemento que contiene la información que desplegará el tooltip tendrá una clase inicial `no-show` para que no se encuentre visible.
```html
<!--ELEMENTO PARA HOVER-->
Es tiempo de <span id="elHoverTool1" name="tool1"> hacer hover en el elemento 1</span> para mostrar ayuda visual.
<!--FIN ELEMENTO PARA HOVER-->
<!--ELEMENTO QUE MOSTRARÁ AL HACER HOVER-->
<div id="tool1" class="no-show">
    <div class="parrafo">Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Eius explicabo, culpa temporibus unde impedit, saepe, modi odio quod necessitatibus nesciunt blanditiis. Pariatur officiis error earum eaque rem esse quae distinctio!<div>
    <!--...Content-->
</div>
<!--FIN ELEMENTO QUE MOSTRARÁ AL HACER HOVER-->
```
En el código Javascript se agregan los eventos para detectar que el cursor este sobre el elemento que activa el hover, ejecutando la función para cargar el contenido del tooltip.

```javascript
const elHoverTool1 = document.getElementById('elHoverTool1');

elHoverTool1.addEventListener('mouseover', function(obj){
    runToolTip(obj, 400)
})
```
Cuando los elementos HTML son cargados desde código Javascript llamar la función en la etiqueta:
```javascript
const cargaContenido = document.getElementById('cargaContent');
let html = `<div><p>Este es el texto del<span name="tool1" onmouseover="loadToolTip(this, 400)">tooltip</span>del documento.</p></div>
<div id="tool1" class="no-show">
    <div class="parrafo">Lorem ipsum dolor, sit amet consectetur adipisicing, elit.Eius explicabo, culpa temporibus unde impedit, saepe, modi odio quod necessitatibus nesciunt blanditiis. Pariatur officiis error earum eaque rem esse quae distinctio!<div>
    <!--...Content-->
</div>
`;
cargaContenido.innerHTML = html;
```
La función `loadToolTip` agregará o elminiará la clase que despliega el contenido, cuando se encuentra visible agrega la clase `show-tooltip` sobre el elemento, en caso contrario `no-show`.
```css
.no-show {
    display: none;
}
.show-tooltip {
    position: absolute;
    z-index: 1;
}
```