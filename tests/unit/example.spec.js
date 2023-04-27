// import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

describe("example component", () => {
  test("Debe de ser mayor a 10", () => {
    //arreglar
    let value = 10;
    //estimulo
    value += 10;
    //observar el resultado
    // if (value > 10) {
    //   //TODO:todo bien
    // } else {
    //   throw "El valor no es mayor a 10";
    // }
    expect(value).toBeGreaterThan(10);
  });
});
