export async function getCustomer(id) {
  const response = await fetch(`http://localhost:8080/api/customers/${id}`);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function assignLibraryToCustomer(id, custId) {
  const invoiceDetail = await fetch(
    `http://localhost:8080/api/customers/${custId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ libraryPackage: id }),
    }
  );
  console.log("Successfully added library to customer");
  return await invoiceDetail.json();
}
