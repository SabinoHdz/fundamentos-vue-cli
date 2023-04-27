import { shallowMount } from "@vue/test-utils";
import CounterView from "@/components/CounterView";
describe("Counter Componer", () => {
  //Snapshots
  //   test("Debe de hacer match con el snapshot", () => {
  //     const wrapper = shallowMount(CounterView);
  //     expect(wrapper.html()).toMatchSnapshot();
  //   });
  //Verificacion de etiquetas HTML
  test('Counter debe de tener el valor por defecto "Counter"', () => {
    const wrapper = shallowMount(CounterView);
    expect(wrapper.find("h2").exists()).toBeTruthy();
    const h2 = wrapper.find("h2").text();
    //console.log(h2.text());
    expect(h2).toBe("Counter");
  });
  test("el valor por defecto debe de ser 100 en p", () => {
    //wrapper
    const wrapper = shallowMount(CounterView);
    const value = wrapper.find('[ data-testid="counter"]').text();
    expect(value).toBe("10");
    //ptangs
    //const elementsParaghapList = wrapper.findAll("p");
    //expect sengudo p==100
    //expect(elementsParaghapList[1].text()).toBe("10");
  });
});
