on("onResourceStart", (resName: string) => {
    if (resName === GetCurrentResourceName()) {
      console.log("TypeScript boilerplate server started!");
    }
  });