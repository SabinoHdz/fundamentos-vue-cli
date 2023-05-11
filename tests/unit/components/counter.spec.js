import { shallowMount } from "@vue/test-utils";
import CounterView from "@/components/CounterView";
describe("Counter Componer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(CounterView);
  });
  //Snapshots
  //   test("Debe de hacer match con el snapshot", () => {
  //     const wrapper = shallowMount(CounterView);
  //     expect(wrapper.html()).toMatchSnapshot();
  //   });
  //Verificacion de etiquetas HTML
  test('Counter debe de tener el valor por defecto "Counter"', () => {
    //const wrapper = shallowMount(CounterView);
    expect(wrapper.find("h2").exists()).toBeTruthy();
    const h2 = wrapper.find("h2").text();
    //console.log(h2.text());
    expect(h2).toBe("Counter");
  });
  test("el valor por defecto debe de ser 100 en p", () => {
    //wrapper
    //const wrapper = shallowMount(CounterView);
    const value = wrapper.find('[ data-testid="counter"]').text();
    expect(value).toBe("10");
    //ptangs
    //const elementsParaghapList = wrapper.findAll("p");
    //expect sengudo p==100
    //expect(elementsParaghapList[1].text()).toBe("10");
  });

  test("debe de incrementar y decrementar  el contador", async () => {
    //const wrapper = shallowMount(CounterView);
    const [incrementBtn, decrementBtn] = wrapper.findAll("button");

    await incrementBtn.trigger("click");
    await incrementBtn.trigger("click");
    await incrementBtn.trigger("click");
    await decrementBtn.trigger("click");
    await decrementBtn.trigger("click");
    const value = wrapper.find('[ data-testid="counter"]').text();
    expect(value).toBe("11");
  });
  // para ejecutar el test de counter se utiliza el siguiente comando:
  //npm run test:unit counter
  //npm run test:unit <nombreComponente>
  test("debe se establecerse valores por default", () => {
    //Leer las properties
    //console.log(wrapper.props());
    //Una forma de obtener las props
    //const {start}=wrapper.props();
    //Otra forma de establecer props
    const start = wrapper.props("start");
    console.log(typeof start);
    const value = wrapper.find('[ data-testid="counter"]').text();

    expect(Number(value)).toBe(start);
  });
});
