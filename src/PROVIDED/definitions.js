/***********
 * Component Definitions

Section - Will be a component with title text and it should be able
to render its children if children exists


Card - Will a component with title link text and it should be able to 
render its children if children exists


Markdown - should be able to render string as markdown 
(you can use this package https://github.com/developit/snarkdown)


Tag - This component should render the tag given in props ie, 
if Tag is provided with h2 then it should render h2 tag with children 
Tag can have text as well as array of children as well. 
if the array is a string array then it should render array of Tag elements 
ie 

{
    component: 'Tag',
    props: {
        children: ['I am sub sub child','I am sub sub child 2'],
        className: 'sub sub text',
        tag: 'div',
    },
},


should render 
<div>I am sub sub child</div>
<div>I am sub sub child 2</div>
Tag should pass all props to rendered elements



if component mentioed in data does not exist then it should skip that part (code should not break)
*/

const Col = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const Row = ({ valign, className, children }) => {
  return <div className={className}>{children}</div>;
};
