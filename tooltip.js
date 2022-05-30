function loadToolTip(element, toolWidth){
	if (element.target) {
		element = element.target;
	} 
	let toolTipElement = '';
	let windowSize = window.innerWidth;
	let i = 0, wTotal = 0, position = 0;
	// obtener propiedades del elemento
	let elementProps = element.getBoundingClientRect();
	// acceso al id del elemento a mostrar por medio de la propiedad del nombre
	toolTipElement = document.getElementById(element.getAttribute('name'));
	if (!toolTipElement) {
		console.error('No existe la propiedad name:"%s" en el contenido del HTML', element.getAttribute('name'))
	} else {
		toolTipElement.classList.remove('no-show');
		toolTipElement.classList.add('show-tooltip');
		// posición del elemento que llama al tooltip + la de lo largo del elemento tooltip
		wTotal = elementProps.x + toolWidth;
		// se excedio
		if (wTotal > windowSize) {
			position = windowSize-toolWidth;
			toolTipElement.style = `width:${toolWidth}px;top:${elementProps.bottom}px;left:${position}px;`
		} else {
			toolTipElement.style = `width:${toolWidth}px;top:${elementProps.bottom}px;left:${elementProps.x}px;`
		}
		// agregando eventos de salida
		element.addEventListener('mouseleave', function(event){
			// si esta en el elemento que se muestra
			toolTipElement.addEventListener('mouseover', function(event){
					toolTipElement.classList.add('show-tooltip');
					toolTipElement.classList.remove('no-show');
					return
			})
			// si sale del elemento
			toolTipElement.addEventListener('mouseleave', function(event){
					toolTipElement.classList.remove('show-tooltip');
					toolTipElement.classList.add('no-show');
					return
			})
			// si solo sale del elemento que llama a mostrar el tooltip
			toolTipElement.classList.remove('show-tooltip');
			toolTipElement.classList.add('no-show');
		})
		return;
	}
}

