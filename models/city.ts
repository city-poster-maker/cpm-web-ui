export type CityMap = {
  name: string;
  country: string;
  path: string;
};

export const cityMaps: CityMap[] = [
  {
    name: "Paris",
    country: "France",
    path: "M72 260 C112 224 134 205 168 204 C214 203 216 159 254 156 C293 153 308 192 348 178 C380 166 379 120 418 114 C454 108 475 140 512 132 M122 296 C164 258 203 258 238 286 C272 312 319 312 346 278 C374 244 421 246 463 284 M172 122 C199 168 232 180 280 172 C327 164 359 182 381 222 C399 255 428 273 468 270 M94 170 L482 330 M222 86 L334 348 M430 88 L176 360",
  },
  {
    name: "Berlin",
    country: "Germany",
    path: "M86 166 C127 114 192 108 238 149 C274 181 316 183 357 156 C403 126 460 139 505 191 M110 236 C154 208 190 216 226 251 C264 288 310 291 351 260 C389 231 432 236 480 276 M148 328 C183 294 230 298 268 333 C304 365 363 359 401 318 M108 100 L505 344 M188 80 L255 392 M332 80 L398 380 M82 300 L520 122",
  },
  {
    name: "Madrid",
    country: "Spain",
    path: "M112 324 C152 265 204 248 260 273 C311 296 365 285 410 235 C439 202 470 198 508 224 M96 214 C142 189 179 194 219 225 C257 255 298 249 331 207 C365 163 416 153 474 174 M146 124 C188 159 226 161 264 129 C301 98 351 99 397 130 M136 84 L450 356 M482 92 L116 372 M86 270 L521 132 M250 72 L318 386",
  },
  {
    name: "Lisbon",
    country: "Portugal",
    path: "M84 118 C137 143 158 183 146 238 C135 287 160 326 211 346 C250 362 297 351 326 318 C364 274 407 265 462 292 M184 90 C209 134 251 150 301 136 C357 121 402 144 425 196 C443 237 475 257 520 258 M94 310 C144 278 190 280 233 318 M106 178 L470 360 M230 76 L296 384 M398 84 L134 370 M90 254 L500 150",
  },
];

export const renderableCities = [
  "Amsterdam, Netherlands",
  "Barcelona, Spain",
  "Berlin, Germany",
  "Copenhagen, Denmark",
  "Lisbon, Portugal",
  "London, United Kingdom",
  "Madrid, Spain",
  "Paris, France",
  "Prague, Czechia",
  "Rome, Italy",
  "Vienna, Austria",
];

export const featuredPosterCities = ["Paris", "Berlin", "Madrid", "Lisbon", "Rome"];

export function normalizeCityName(city: string) {
  const cleanCity = city.trim();

  return cleanCity.length > 0 ? cleanCity : "Paris, France";
}
