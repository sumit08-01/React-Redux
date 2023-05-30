import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import { RandomUser } from "components/RandomUser/RandomUser";
describe("<Randomuser/>", () => {
  //   it("loads user when clicking on the button", () => {
  //   it("loads user when clicking on the button", async () => {
  //     render(<RandomUser />);
  //     const button = screen.getByRole("button");
  //     fireEvent.click(button);
  //     // const titleEl = screen.getByRole("heading", { level: 2 }); // here you can not use getByRole because it's sync and it want result instant
  //     const titleEl = await screen.findByRole("heading", { level: 2 });
  //     //findByRole is asysn and it's a promise mean, i'll wait until this thing appear in the DOM and then i'll go to the next line
  //     screen.debug(titleEl);

  it("loads user when clicking on the button", async () => {
    render(<RandomUser />);
    axios.get.mockResolvedValueOnce({ data: MOKE_USER_RESPONSE });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const titleEl = await screen.findByText("Larry Morales");
    expect(titleEl.textContent).toBe("Larry Morales");

    axios.get.mockResolvedValueOnce({ data: MOKE_USER_RESPONSE2 });
    fireEvent.click(button);
    const titleEl2 = await screen.findByText("Cod Iku");
    expect(titleEl.textContent).toBe("Cod Iku");
  });
});

const MOKE_USER_RESPONSE = {
  results: [
    {
      gender: "male",
      name: { title: "Mr", first: "Larry ", last: "Morales" },
      location: {
        street: { number: 7752, name: "Camac St" },
        city: "Uluberia",
        state: "Uttarakhand",
        country: "India",
        postcode: 75807,
        coordinates: { latitude: "10.7537", longitude: "-10.2534" },
        timezone: { offset: "+4:30", description: "Kabul" },
      },
      email: "manbir.shetty@example.com",
      login: {
        uuid: "9eac1ffb-91b2-4be4-bda3-154919765da0",
        username: "purpleduck164",
        password: "smoke",
        salt: "KfThT5p0",
        md5: "878f8315db065fdab56f5580083c45db",
        sha1: "14950eaecd2329f226698dd2652316078141e576",
        sha256:
          "19d23cc86e6a12b7814031589d309eda8b37d078307ee04d228ee075633177c0",
      },
      dob: { date: "1964-10-08T13:17:39.603Z", age: 58 },
      registered: { date: "2008-04-19T04:45:37.095Z", age: 15 },
      phone: "7643386024",
      cell: "9408556289",
      id: { name: "UIDAI", value: "255659745445" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/58.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/58.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/58.jpg",
      },
      nat: "IN",
    },
  ],
  info: { seed: "70b62f9dc00f564f", results: 1, page: 1, version: "1.4" },
};

const MOKE_USER_RESPONSE2 = {
  results: [
    {
      gender: "male",
      name: { title: "Mr", first: "Cod", last: "Iku" },
      location: {
        street: { number: 7752, name: "Camac St" },
        city: "Uluberia",
        state: "Uttarakhand",
        country: "India",
        postcode: 75807,
        coordinates: { latitude: "10.7537", longitude: "-10.2534" },
        timezone: { offset: "+4:30", description: "Kabul" },
      },
      email: "manbir.shetty@example.com",
      login: {
        uuid: "9eac1ffb-91b2-4be4-bda3-154919765da0",
        username: "purpleduck164",
        password: "smoke",
        salt: "KfThT5p0",
        md5: "878f8315db065fdab56f5580083c45db",
        sha1: "14950eaecd2329f226698dd2652316078141e576",
        sha256:
          "19d23cc86e6a12b7814031589d309eda8b37d078307ee04d228ee075633177c0",
      },
      dob: { date: "1964-10-08T13:17:39.603Z", age: 58 },
      registered: { date: "2008-04-19T04:45:37.095Z", age: 15 },
      phone: "7643386024",
      cell: "9408556289",
      id: { name: "UIDAI", value: "255659745445" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/58.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/58.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/58.jpg",
      },
      nat: "IN",
    },
  ],
  info: { seed: "70b62f9dc00f564f", results: 1, page: 1, version: "1.4" },
};
