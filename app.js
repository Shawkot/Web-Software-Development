const handleRequest = (request) => {
  const url = new URL(request.url);
  const params = url.searchParams;

  let sum = 0;
  let mul = 0;

  let num1;
  let num2;
  
  const operation = params.get('operation');

  if(operation === 'sum') {
    if(params.has('number1') && params.has('number2')){
      num1 = Number(params.get("number1"));
      num2 = Number(params.get("number2"));
      sum = num1 + num2;
      return new Response(sum);
    }
    
    
  } else if(operation === 'product') {
    if(params.has('number1') && params.has('number2')){
      num1 = Number(params.get("number1"));
      num2 = Number(params.get("number2"));
      mul = num1 * num2;
      return new Response(mul);
    }
  }
  return new Response('Invalid parameters.');
};

Deno.serve(handleRequest);