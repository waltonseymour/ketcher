/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/
import type { Element } from './element.types'

const elementsArray: Array<Element> = [
  {
    number: 1,
    label: 'H',
    period: 1,
    group: 1,
    title: 'Hydrogen',
    state: 'gas',
    origin: 'primordial',
    type: 'diatomic',
    mass: 1.00794
  },
  {
    number: 2,
    label: 'He',
    period: 1,
    group: 8,
    title: 'Helium',
    state: 'gas',
    origin: 'primordial',
    type: 'noble',
    mass: 4.0026022
  },
  {
    number: 3,
    label: 'Li',
    period: 2,
    group: 1,
    title: 'Lithium',
    state: 'solid',
    origin: 'primordial',
    type: 'alkali',
    mass: 6.94
  },
  {
    number: 4,
    label: 'Be',
    period: 2,
    group: 2,
    title: 'Beryllium',
    state: 'solid',
    origin: 'primordial',
    type: 'alkaline-earth',
    mass: 9.01218315
  },
  {
    number: 5,
    label: 'B',
    period: 2,
    group: 3,
    title: 'Boron',
    state: 'solid',
    origin: 'primordial',
    type: 'metalloid',
    mass: 10.81
  },
  {
    number: 6,
    label: 'C',
    period: 2,
    group: 4,
    title: 'Carbon',
    state: 'solid',
    origin: 'primordial',
    type: 'polyatomic',
    mass: 12.011
  },
  {
    number: 7,
    label: 'N',
    period: 2,
    group: 5,
    title: 'Nitrogen',
    state: 'gas',
    origin: 'primordial',
    type: 'diatomic',
    mass: 14.007
  },
  {
    number: 8,
    label: 'O',
    period: 2,
    group: 6,
    leftH: true,
    title: 'Oxygen',
    state: 'gas',
    origin: 'primordial',
    type: 'diatomic',
    mass: 15.999
  },
  {
    number: 9,
    label: 'F',
    period: 2,
    group: 7,
    leftH: true,
    title: 'Fluorine',
    state: 'gas',
    origin: 'primordial',
    type: 'diatomic',
    mass: 18.9984031636
  },
  {
    number: 10,
    label: 'Ne',
    period: 2,
    group: 8,
    title: 'Neon',
    state: 'gas',
    origin: 'primordial',
    type: 'noble',
    mass: 20.17976
  },
  {
    number: 11,
    label: 'Na',
    period: 3,
    group: 1,
    title: 'Sodium',
    state: 'solid',
    origin: 'primordial',
    type: 'alkali',
    mass: 22.989769282
  },
  {
    number: 12,
    label: 'Mg',
    period: 3,
    group: 2,
    title: 'Magnesium',
    state: 'solid',
    origin: 'primordial',
    type: 'alkaline-earth',
    mass: 24.305
  },
  {
    number: 13,
    label: 'Al',
    period: 3,
    group: 3,
    title: 'Aluminium',
    state: 'solid',
    origin: 'primordial',
    type: 'post-transition',
    mass: 26.98153857
  },
  {
    number: 14,
    label: 'Si',
    period: 3,
    group: 4,
    title: 'Silicon',
    state: 'solid',
    origin: 'primordial',
    type: 'metalloid',
    mass: 28.085
  },
  {
    number: 15,
    label: 'P',
    period: 3,
    group: 5,
    title: 'Phosphorus',
    state: 'solid',
    origin: 'primordial',
    type: 'polyatomic',
    mass: 30.9737619985
  },
  {
    number: 16,
    label: 'S',
    period: 3,
    group: 6,
    leftH: true,
    title: 'Sulfur',
    state: 'solid',
    origin: 'primordial',
    type: 'polyatomic',
    mass: 32.06
  },
  {
    number: 17,
    label: 'Cl',
    period: 3,
    group: 7,
    leftH: true,
    title: 'Chlorine',
    state: 'gas',
    origin: 'primordial',
    type: 'diatomic',
    mass: 35.45
  },
  {
    number: 18,
    label: 'Ar',
    period: 3,
    group: 8,
    title: 'Argon',
    state: 'gas',
    origin: 'primordial',
    type: 'noble',
    mass: 39.9481
  },
  {
    number: 19,
    label: 'K',
    period: 4,
    group: 1,
    title: 'Potassium',
    state: 'solid',
    origin: 'primordial',
    type: 'alkali',
    mass: 39.09831
  },
  {
    number: 20,
    label: 'Ca',
    period: 4,
    group: 2,
    title: 'Calcium',
    state: 'solid',
    origin: 'primordial',
    type: 'alkaline-earth',
    mass: 40.0784
  },
  {
    number: 21,
    label: 'Sc',
    period: 4,
    group: 3,
    title: 'Scandium',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 44.9559085
  },
  {
    number: 22,
    label: 'Ti',
    period: 4,
    group: 4,
    title: 'Titanium',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 47.8671
  },
  {
    number: 23,
    label: 'V',
    period: 4,
    group: 5,
    title: 'Vanadium',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 50.94151
  },
  {
    number: 24,
    label: 'Cr',
    period: 4,
    group: 6,
    title: 'Chromium',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 51.99616
  },
  {
    number: 25,
    label: 'Mn',
    period: 4,
    group: 7,
    title: 'Manganese',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 54.9380443
  },
  {
    number: 26,
    label: 'Fe',
    period: 4,
    group: 8,
    title: 'Iron',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 55.8452
  },
  {
    number: 27,
    label: 'Co',
    period: 4,
    group: 8,
    title: 'Cobalt',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 58.9331944
  },
  {
    number: 28,
    label: 'Ni',
    period: 4,
    group: 8,
    title: 'Nickel',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 58.69344
  },
  {
    number: 29,
    label: 'Cu',
    period: 4,
    group: 1,
    title: 'Copper',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 63.5463
  },
  {
    number: 30,
    label: 'Zn',
    period: 4,
    group: 2,
    title: 'Zinc',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 65.382
  },
  {
    number: 31,
    label: 'Ga',
    period: 4,
    group: 3,
    title: 'Gallium',
    state: 'solid',
    origin: 'primordial',
    type: 'post-transition',
    mass: 69.7231
  },
  {
    number: 32,
    label: 'Ge',
    period: 4,
    group: 4,
    title: 'Germanium',
    state: 'solid',
    origin: 'primordial',
    type: 'metalloid',
    mass: 72.6308
  },
  {
    number: 33,
    label: 'As',
    period: 4,
    group: 5,
    title: 'Arsenic',
    state: 'solid',
    origin: 'primordial',
    type: 'metalloid',
    mass: 74.9215956
  },
  {
    number: 34,
    label: 'Se',
    period: 4,
    group: 6,
    leftH: true,
    title: 'Selenium',
    state: 'solid',
    origin: 'primordial',
    type: 'polyatomic',
    mass: 78.9718
  },
  {
    number: 35,
    label: 'Br',
    period: 4,
    group: 7,
    leftH: true,
    title: 'Bromine',
    state: 'liquid',
    origin: 'primordial',
    type: 'diatomic',
    mass: 79.904
  },
  {
    number: 36,
    label: 'Kr',
    period: 4,
    group: 8,
    title: 'Krypton',
    state: 'gas',
    origin: 'primordial',
    type: 'noble',
    mass: 83.7982
  },
  {
    number: 37,
    label: 'Rb',
    period: 5,
    group: 1,
    title: 'Rubidium',
    state: 'solid',
    origin: 'primordial',
    type: 'alkali',
    mass: 85.46783
  },
  {
    number: 38,
    label: 'Sr',
    period: 5,
    group: 2,
    title: 'Strontium',
    state: 'solid',
    origin: 'primordial',
    type: 'alkaline-earth',
    mass: 87.621
  },
  {
    number: 39,
    label: 'Y',
    period: 5,
    group: 3,
    title: 'Yttrium',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 88.905842
  },
  {
    number: 40,
    label: 'Zr',
    period: 5,
    group: 4,
    title: 'Zirconium',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 91.2242
  },
  {
    number: 41,
    label: 'Nb',
    period: 5,
    group: 5,
    title: 'Niobium',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 92.906372
  },
  {
    number: 42,
    label: 'Mo',
    period: 5,
    group: 6,
    title: 'Molybdenum',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 95.951
  },
  {
    number: 43,
    label: 'Tc',
    period: 5,
    group: 7,
    title: 'Technetium',
    state: 'solid',
    origin: 'decay',
    type: 'transition',
    mass: 98
  },
  {
    number: 44,
    label: 'Ru',
    period: 5,
    group: 8,
    title: 'Ruthenium',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 101.072
  },
  {
    number: 45,
    label: 'Rh',
    period: 5,
    group: 8,
    title: 'Rhodium',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 102.905502
  },
  {
    number: 46,
    label: 'Pd',
    period: 5,
    group: 8,
    title: 'Palladium',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 106.421
  },
  {
    number: 47,
    label: 'Ag',
    period: 5,
    group: 1,
    title: 'Silver',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 107.86822
  },
  {
    number: 48,
    label: 'Cd',
    period: 5,
    group: 2,
    title: 'Cadmium',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 112.4144
  },
  {
    number: 49,
    label: 'In', // 49
    period: 5,
    group: 3,
    title: 'Indium',
    state: 'solid',
    origin: 'primordial',
    type: 'post-transition',
    mass: 114.8181
  },
  {
    number: 50,
    label: 'Sn',
    period: 5,
    group: 4,
    title: 'Tin',
    state: 'solid',
    origin: 'primordial',
    type: 'post-transition',
    mass: 118.7107
  },
  {
    number: 51,
    label: 'Sb',
    period: 5,
    group: 5,
    title: 'Antimony',
    state: 'solid',
    origin: 'primordial',
    type: 'metalloid',
    mass: 121.7601
  },
  {
    number: 52,
    label: 'Te',
    period: 5,
    group: 6,
    title: 'Tellurium',
    state: 'solid',
    origin: 'primordial',
    type: 'metalloid',
    mass: 127.603
  },
  {
    number: 53,
    label: 'I',
    period: 5,
    group: 7,
    leftH: true,
    title: 'Iodine',
    state: 'solid',
    origin: 'primordial',
    type: 'diatomic',
    mass: 126.904473
  },
  {
    number: 54,
    label: 'Xe',
    period: 5,
    group: 8,
    title: 'Xenon',
    state: 'gas',
    origin: 'primordial',
    type: 'noble',
    mass: 131.2936
  },
  {
    number: 55,
    label: 'Cs',
    period: 6,
    group: 1,
    title: 'Caesium',
    state: 'solid',
    origin: 'primordial',
    type: 'alkali',
    mass: 132.905451966
  },
  {
    number: 56,
    label: 'Ba',
    period: 6,
    group: 2,
    title: 'Barium',
    state: 'solid',
    origin: 'primordial',
    type: 'alkaline-earth',
    mass: 137.3277
  },
  {
    number: 57,
    label: 'La',
    period: 6,
    group: 3,
    title: 'Lanthanum',
    state: 'solid',
    origin: 'primordial',
    type: 'lanthanide',
    mass: 138.905477
  },
  {
    number: 58,
    label: 'Ce',
    period: 6,
    group: 3,
    title: 'Cerium',
    state: 'solid',
    origin: 'primordial',
    type: 'lanthanide',
    mass: 140.1161
  },
  {
    number: 59,
    label: 'Pr',
    period: 6,
    group: 3,
    title: 'Praseodymium',
    state: 'solid',
    origin: 'primordial',
    type: 'lanthanide',
    mass: 140.907662
  },
  {
    number: 60,
    label: 'Nd',
    period: 6,
    group: 3,
    title: 'Neodymium',
    state: 'solid',
    origin: 'primordial',
    type: 'lanthanide',
    mass: 144.2423
  },
  {
    number: 61,
    label: 'Pm',
    period: 6,
    group: 3,
    title: 'Promethium',
    state: 'solid',
    origin: 'decay',
    type: 'lanthanide',
    mass: 145
  },
  {
    number: 62,
    label: 'Sm',
    period: 6,
    group: 3,
    title: 'Samarium',
    state: 'solid',
    origin: 'primordial',
    type: 'lanthanide',
    mass: 150.362
  },
  {
    number: 63,
    label: 'Eu',
    period: 6,
    group: 3,
    title: 'Europium',
    state: 'solid',
    origin: 'primordial',
    type: 'lanthanide',
    mass: 151.9641
  },
  {
    number: 64,
    label: 'Gd',
    period: 6,
    group: 3,
    title: 'Gadolinium',
    state: 'solid',
    origin: 'primordial',
    type: 'lanthanide',
    mass: 157.253
  },
  {
    number: 65,
    label: 'Tb',
    period: 6,
    group: 3,
    title: 'Terbium',
    state: 'solid',
    origin: 'primordial',
    type: 'lanthanide',
    mass: 158.925352
  },
  {
    number: 66,
    label: 'Dy',
    period: 6,
    group: 3,
    title: 'Dysprosium',
    state: 'solid',
    origin: 'primordial',
    type: 'lanthanide',
    mass: 162.5001
  },
  {
    number: 67,
    label: 'Ho',
    period: 6,
    group: 3,
    title: 'Holmium',
    state: 'solid',
    origin: 'primordial',
    type: 'lanthanide',
    mass: 164.930332
  },
  {
    number: 68,
    label: 'Er',
    period: 6,
    group: 3,
    title: 'Erbium',
    state: 'solid',
    origin: 'primordial',
    type: 'lanthanide',
    mass: 167.2593
  },
  {
    number: 69,
    label: 'Tm',
    period: 6,
    group: 3,
    title: 'Thulium',
    state: 'solid',
    origin: 'primordial',
    type: 'lanthanide',
    mass: 168.934222
  },
  {
    number: 70,
    label: 'Yb',
    period: 6,
    group: 3,
    title: 'Ytterbium',
    state: 'solid',
    origin: 'primordial',
    type: 'lanthanide',
    mass: 173.0451
  },
  {
    number: 71,
    label: 'Lu',
    period: 6,
    group: 3,
    title: 'Lutetium',
    state: 'solid',
    origin: 'primordial',
    type: 'lanthanide',
    mass: 174.96681
  },
  {
    number: 72,
    label: 'Hf',
    period: 6,
    group: 4,
    title: 'Hafnium',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 178.492
  },
  {
    number: 73,
    label: 'Ta',
    period: 6,
    group: 5,
    title: 'Tantalum',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 180.947882
  },
  {
    number: 74,
    label: 'W',
    period: 6,
    group: 6,
    title: 'Tungsten',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 183.841
  },
  {
    number: 75,
    label: 'Re',
    period: 6,
    group: 7,
    title: 'Rhenium',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 186.2071
  },
  {
    number: 76,
    label: 'Os',
    period: 6,
    group: 8,
    title: 'Osmium',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 190.233
  },
  {
    number: 77,
    label: 'Ir',
    period: 6,
    group: 8,
    title: 'Iridium',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 192.2173
  },
  {
    number: 78,
    label: 'Pt',
    period: 6,
    group: 8,
    title: 'Platinum',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 195.0849
  },
  {
    number: 79,
    label: 'Au',
    period: 6,
    group: 1,
    title: 'Gold',
    state: 'solid',
    origin: 'primordial',
    type: 'transition',
    mass: 196.9665695
  },
  {
    number: 80,
    label: 'Hg',
    period: 6,
    group: 2,
    title: 'Mercury',
    state: 'liquid',
    origin: 'primordial',
    type: 'transition',
    mass: 200.5923
  },
  {
    number: 81,
    label: 'Tl',
    period: 6,
    group: 3,
    title: 'Thallium',
    state: 'solid',
    origin: 'primordial',
    type: 'post-transition',
    mass: 204.38
  },
  {
    number: 82,
    label: 'Pb',
    period: 6,
    group: 4,
    title: 'Lead',
    state: 'solid',
    origin: 'primordial',
    type: 'post-transition',
    mass: 207.21
  },
  {
    number: 83,
    label: 'Bi',
    period: 6,
    group: 5,
    title: 'Bismuth',
    state: 'solid',
    origin: 'primordial',
    type: 'post-transition',
    mass: 208.980401
  },
  {
    number: 84,
    label: 'Po',
    period: 6,
    group: 6,
    title: 'Polonium',
    state: 'solid',
    origin: 'decay',
    type: 'post-transition',
    mass: 209
  },
  {
    number: 85,
    label: 'At',
    period: 6,
    group: 7,
    title: 'Astatine',
    state: 'solid',
    origin: 'decay',
    type: 'metalloid',
    mass: 210
  },
  {
    number: 86,
    label: 'Rn',
    period: 6,
    group: 8,
    title: 'Radon',
    state: 'gas',
    origin: 'decay',
    type: 'noble',
    mass: 222
  },
  {
    number: 87,
    label: 'Fr',
    period: 7,
    group: 1,
    title: 'Francium',
    state: 'solid',
    origin: 'decay',
    type: 'alkali',
    mass: 223
  },
  {
    number: 88,
    label: 'Ra',
    period: 7,
    group: 2,
    title: 'Radium',
    state: 'solid',
    origin: 'decay',
    type: 'alkaline-earth',
    mass: 226
  },
  {
    number: 89,
    label: 'Ac',
    period: 7,
    group: 3,
    title: 'Actinium',
    state: 'solid',
    origin: 'decay',
    type: 'actinide',
    mass: 227
  },
  {
    number: 90,
    label: 'Th',
    period: 7,
    group: 3,
    title: 'Thorium',
    state: 'solid',
    origin: 'primordial',
    type: 'actinide',
    mass: 232.03774
  },
  {
    number: 91,
    label: 'Pa',
    period: 7,
    group: 3,
    title: 'Protactinium',
    state: 'solid',
    origin: 'decay',
    type: 'actinide',
    mass: 231.035882
  },
  {
    number: 92,
    label: 'U',
    period: 7,
    group: 3,
    title: 'Uranium',
    state: 'solid',
    origin: 'primordial',
    type: 'actinide',
    mass: 238.028913
  },
  {
    number: 93,
    label: 'Np',
    period: 7,
    group: 3,
    title: 'Neptunium',
    state: 'solid',
    origin: 'decay',
    type: 'actinide',
    mass: 237
  },
  {
    number: 94,
    label: 'Pu',
    period: 7,
    group: 3,
    title: 'Plutonium',
    state: 'solid',
    origin: 'decay',
    type: 'actinide',
    mass: 244
  },
  {
    number: 95,
    label: 'Am',
    period: 7,
    group: 3,
    title: 'Americium',
    state: 'solid',
    origin: 'synthetic',
    type: 'actinide',
    mass: 243
  },
  {
    number: 96,
    label: 'Cm',
    period: 7,
    group: 3,
    title: 'Curium',
    state: 'solid',
    origin: 'synthetic',
    type: 'actinide',
    mass: 247
  },
  {
    number: 97,
    label: 'Bk',
    period: 7,
    group: 3,
    title: 'Berkelium',
    state: 'solid',
    origin: 'synthetic',
    type: 'actinide',
    mass: 247
  },
  {
    number: 98,
    label: 'Cf',
    period: 7,
    group: 3,
    title: 'Californium',
    state: 'solid',
    origin: 'synthetic',
    type: 'actinide',
    mass: 251
  },
  {
    number: 99,
    label: 'Es',
    period: 7,
    group: 3,
    title: 'Einsteinium',
    state: 'solid',
    origin: 'synthetic',
    type: 'actinide',
    mass: 252
  },
  {
    number: 100,
    label: 'Fm',
    period: 7,
    group: 3,
    title: 'Fermium',
    origin: 'synthetic',
    type: 'actinide',
    mass: 257
  },
  {
    number: 101,
    label: 'Md',
    period: 7,
    group: 3,
    title: 'Mendelevium',
    origin: 'synthetic',
    type: 'actinide',
    mass: 258
  },
  {
    number: 102,
    label: 'No',
    period: 7,
    group: 3,
    title: 'Nobelium',
    origin: 'synthetic',
    type: 'actinide',
    mass: 259
  },
  {
    number: 103,
    label: 'Lr',
    period: 7,
    group: 3,
    title: 'Lawrencium',
    origin: 'synthetic',
    type: 'actinide',
    mass: 266
  },
  {
    number: 104,
    label: 'Rf',
    period: 7,
    group: 4,
    title: 'Rutherfordium',
    origin: 'synthetic',
    type: 'transition',
    mass: 267
  },
  {
    number: 105,
    label: 'Db',
    period: 7,
    group: 5,
    title: 'Dubnium',
    origin: 'synthetic',
    type: 'transition',
    mass: 268
  },
  {
    number: 106,
    label: 'Sg',
    period: 7,
    group: 6,
    title: 'Seaborgium',
    origin: 'synthetic',
    type: 'transition',
    mass: 269
  },
  {
    number: 107,
    label: 'Bh',
    period: 7,
    group: 7,
    title: 'Bohrium',
    origin: 'synthetic',
    type: 'transition',
    mass: 270
  },
  {
    number: 108,
    label: 'Hs',
    period: 7,
    group: 8,
    title: 'Hassium',
    origin: 'synthetic',
    type: 'transition',
    mass: 269
  },
  {
    number: 109,
    label: 'Mt',
    period: 7,
    group: 8,
    title: 'Meitnerium',
    origin: 'synthetic',
    mass: 278
  },
  {
    number: 110,
    label: 'Ds',
    period: 7,
    group: 8,
    title: 'Darmstadtium',
    origin: 'synthetic',
    mass: 281
  },
  {
    number: 111,
    label: 'Rg',
    period: 7,
    group: 1,
    title: 'Roentgenium',
    origin: 'synthetic',
    mass: 282
  },
  {
    number: 112,
    label: 'Cn',
    period: 7,
    group: 2,
    title: 'Copernicium',
    origin: 'synthetic',
    type: 'transition',
    mass: 285
  },
  {
    number: 113,
    label: 'Nh',
    period: 7,
    group: 3,
    title: 'Nihonium',
    origin: 'synthetic',
    mass: 286
  },
  {
    number: 114,
    label: 'Fl',
    period: 7,
    group: 4,
    title: 'Flerovium',
    origin: 'synthetic',
    type: 'post-transition',
    mass: 289
  },
  {
    number: 115,
    label: 'Mc',
    period: 7,
    group: 5,
    title: 'Moscovium',
    origin: 'synthetic',
    mass: 289
  },
  {
    number: 116,
    label: 'Lv',
    period: 7,
    group: 6,
    title: 'Livermorium',
    origin: 'synthetic',
    mass: 293
  },
  {
    number: 117,
    label: 'Ts',
    period: 7,
    group: 7,
    title: 'Tennessine',
    origin: 'synthetic',
    mass: 294
  },
  {
    number: 118,
    label: 'Og',
    period: 7,
    group: 8,
    title: 'Oganesson',
    origin: 'synthetic',
    mass: 294
  }
]

const elementsMap = elementsArray.reduce((acc, element) => {
  acc.set(element.label, element)
  acc.set(element.number, element)
  return acc
}, new Map<string | number, Element>())

export const Elements = {
  get: (key: number | string): Element | undefined => elementsMap.get(key),
  filter: (predicate: (element: Element) => boolean): Array<Element> => {
    return elementsArray.filter(predicate)
  }
}
