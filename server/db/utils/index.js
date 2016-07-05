
export function getForwardMatchString( target ){
  if( typeof target === "string" ){
    return new RegExp( "^"+target, "i" );
  }
  else {
    return target;
  }
}