const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(products: any, token: string) {
  try {
    console.log("esto es producto:");
    console.log(products);
    console.log("esto es token");
    console.log(token);
    const res = await fetch(`${apiUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(products),
    });


    const data = await res.json();
    return data;

  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getOrders(token: string) {
  try {
    const res = await fetch(`${apiUrl}/users/orders`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        Authorization: token,
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}
