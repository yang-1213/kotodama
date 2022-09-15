import md5 from 'md5'

const avatarCDN = 'https://sdn.geekzu.org/avatar/'

const avatarArr = [
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/5b770f58-0cf6-4f4a-8588-c03922252edb.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/80b43b98-58b1-405c-aa2e-c94b5afb6a3b.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/edea99b4-0d96-4a73-9126-369ed99978ad.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/567791bc-a9d0-4d18-999b-874567763ee8.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/d450897e-4118-4f54-bcfe-9b26147ace87.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/1cda1b0e-7614-41d0-a12b-caa2436a4905.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/c388c471-c4ad-4543-9694-85da34304f38.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/750c5192-edcd-4784-926a-79fd50462531.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/e9b0af2b-0877-45e5-9533-230927ed46e6.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/bec1c189-4185-43d6-8003-6dc703421567.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/f88a0bbe-bc22-4215-b402-e01307bff0c8.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/f753896b-9abc-40e9-be2c-e396b53707f2.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/2d118b39-1036-415c-8dd5-332aa3841d3a.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/d66c1239-1340-4917-b103-23ba72b28d3c.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/fbc822bf-7876-4bf1-abf9-4bdb01a57e64.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/3c1bef86-0676-460c-9b45-fabee75ea780.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/541bf390-e605-4ba1-b427-721ff9f689df.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/c12e682e-ecda-4f70-adae-c991a0d16872.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/a3bbda93-12f0-436b-b255-f5758abbfa20.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/a5ba2b42-9687-4a32-b662-751e3b6348b4.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/78a2bda5-3fc6-4170-97be-b0daaad8b694.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/214ce5b7-33c1-42a2-a86d-38e742696f41.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/ca837957-9189-4582-8eb9-ad132016d4b8.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/9f8016f9-553f-4908-8557-9b32b651340e.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/e94e01a1-3ee1-4f24-b0c0-04747764bca5.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/ecb98675-d799-4990-9d5b-9a9df76476be.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/6b5082b3-00a3-4341-88bb-1d94e679892b.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/cb437f78-3604-4844-a1b7-691140e33553.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/a7c846d3-c60e-44ae-bc13-009b9de97708.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/7337042a-032d-45f2-83c8-181a5609cc45.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/506543aa-ef18-42ae-8eb5-416dd090eae5.jpg",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/43ccc24d-1f1b-4aac-95c7-1a5e4639dd0f.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/aef6d9f3-4b87-490f-8a72-7c69acea0a8c.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/ad839d0b-8fb0-4df1-83c8-4507f83e2ae2.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/06ee6e1c-2cd4-4a6b-be37-a48b6cf2dc04.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/4d84cd3d-3166-4b56-a76c-9d5ca9f7a202.jpg",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/d64b4b90-1f1f-4f24-8ee5-355e7867b28f.jpg",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/6d75c104-f7ce-46ce-8ab8-3ec1c3e96209.jpg",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/d26d7692-f8c5-495c-befb-73ce85879fe6.jpg",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/119633af-07de-40e0-9c28-5295a927e430.jpg",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/38cb5115-07d7-432a-9b74-d468036a503f.jpg",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/d5ae46cf-e404-42b4-8946-8856d4b32d6c.jpg",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/beaf032f-6f63-42f3-a292-4d6b62cd285d.jpg",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/5c6fd681-2777-43f2-b571-2b987dbfba86.jpg",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/2c8d952c-e94c-41d7-9b51-d514de62043d.jpg",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/1cd9e5c5-4e28-43b3-9e4d-0da6e409bed3.jpg",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/5550db3f-1ca2-482a-ac6b-b64d2df56f49.jpg",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/5c266c73-767e-42e0-b7be-f7047a706da1.jpg",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/de290131-5c47-4e1b-a35a-a97895e24875.jpg",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/6c136bf3-16bc-4b39-b7ac-6ae439b3aca7.jpg",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/59f07f3e-4c73-4390-a68d-844b56e4a3e5.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/aec20c10-0507-4b90-a66e-8bc53ea2b610.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/2214ac67-5173-41ea-a41e-659f0a5c920b.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/d3de4a62-7508-41f5-bad2-1f1504549384.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/85c5393c-a3e6-49d6-adc9-dff9c250cc62.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/c7df84d9-acda-418a-b653-86707e51f06a.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/989c6b5b-ce89-4c5c-bf8f-5ecec7367ba6.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/b49c1ed8-6f33-42bc-a01a-58a8adc37a65.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/427a30d7-d140-4bc5-a3fc-645532ec33a4.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/4922d8ba-ecdc-408c-9a3e-56833cedf255.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/d14b26d3-cadd-4b76-99ba-28228f265c7f.webp",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-2e8bd685-358d-4edd-8410-b2d4139d8b52/b9b2de58-7e80-4a0f-b3e7-5918d7b48aba.jpg",
];

/**
 * 根据邮件地址获取头像
 * @param email
 * @returns
 */
export function getAvatarUrl(email: string, size = 40) {
  // return `${avatarCDN}${email.includes('@') ? md5(email) : email}?s=${size}&r=G&d=`
  const reg = new RegExp("(\\d+)@qq\\.com$", "i");
  if (reg.test(email)) {
    const q = email.replace(/@qq\.com/i, "").toLowerCase();
    /** 返回qq头像 */
    return `https://q1.qlogo.cn/g?b=qq&nk=${q}&s=100`;
  }
  /** 返回随机头像 */
  return avatarArr[~~(Math.random() * avatarArr.length)];
}
