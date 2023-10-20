export default function Button({ type = 'filled', label, color = 'blue', theme, override, onClick } :
  {
    type?: string; // filled, outlined
    label?: string; // Click me!
    color?: string; // blue, blue-dark, blue-light, pink, yellow, red, green
    theme?: string; // primary, secondary, warning, danger, success
    override?: string; // override css classes
    
    onClick?: (params: any) => any;
  }) {

    let classNames = '';

    switch(type) {

      // filled
      case 'filled':

        // filled - themes
        switch(theme) {

          case 'primary':
            classNames += `bg-blue text-white`;
            break
          case 'secondary':
            classNames += `bg-pink-dark text-white`;
            break;
          case 'success':
            classNames += `bg-green-dark text-white`;
            break;
          case 'warning':
            classNames += `bg-orange text-white`;
            break
          case 'danger':
            classNames += `bg-red text-white`;
            break
          default:
            classNames += `bg-${color} text-white`;

        }
       
        break;

      //  outlined
      case 'outlined':

        // outlined - themes
        switch(theme) {

          case 'primary':
            classNames += `border-blue text-blue`;
            break
          case 'secondary':
            classNames += `border-pink-dark text-pink-darker`;
            break;
          case 'success':
            classNames += `border-green-dark text-green-dark`;
            break;
          case 'warning':
            classNames += `border-orange text-orange`;
            break
          case 'danger':
            classNames += `border-red text-red`;
            break
          default:
            classNames += `border-${color}`;

        }
        
        break;
    }

    // If there's override classes, override it. else do nothing
    classNames = (override) ? override : classNames;

    return (
      <>
        <button className={`border rounded py-1 px-3 ${classNames}`} onClick={onClick}>{ label }</button>
      </>
      
    )

}