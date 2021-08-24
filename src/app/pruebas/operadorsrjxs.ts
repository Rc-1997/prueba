//  const productoA = this.prodService.getProdA();
//     const productoB = this.prodService.getProdB();

//     zip(productoA, productoB)
//       .pipe(

//         map(([prodA, prodB]) => {
//           let lista: any = [];
//           let band;
//           prodA.forEach((producto: producto) => {
//             band = 0;
//             prodB.forEach((Prod) => {
//               if (producto.prod == Prod.prod) {
//                 lista.push([producto.prod, producto.precio, Prod.precio]);
//                 band = 1;
//               }
//             });
//             if (band == 0) {
//               lista.push([producto.prod, producto.precio]);
//             }
//           });
//           prodB.forEach((producto: producto) => {
//             let band = 0;
//             lista.forEach((Prod: producto) => {
//               producto.prod == Prod[0] ? (band = 1) : '';
//             });
//             if (band == 0) {
//               lista.push([producto.prod, producto.precio]);
//             }
//           });
//           console.log(lista);
//           return lista;
//         })
//       )
//       .subscribe((prod) => {
//         console.log('empeiza el zip');
//         console.log(prod);
//         console.log('----------------');
//       });

//     this.dataiif.subscribe((prod) => {
//       console.log('empieza el iff');
//       console.log(prod);
//       this.productos = prod;
//       console.log('----------------');
//     });
//     valProv = false;
//     dataiif.subscribe((prod) => {
//       console.log('empieza el iff');
//       console.log(prod);
//       console.log('----------------');
//     });

//     const datajoin: Observable<any> = forkJoin({
//       productoA,
//       productoB,
//     });
//     let s = true;

//     var mensaje: NgbModalRef;
//     datajoin.subscribe({
//       next: (productos) => {
//         s
//           ? (mensaje = this.mensajeService.pruebaOpenModal(
//               'inicio busqueda de datos para el join'
//             ))
//           : (s = false);
//         console.log('emieza el join 1');
//         console.log(productos);
//         console.log('----------------');
//       },
//       complete: () => {
//         setTimeout(function () {
//           mensaje.close();
//         }, 1000);
//       },
//       error: (err) => console.log(err),
//     });

//     const obs1 = interval(1000).pipe(mapTo('fast one'));
//     const obs2 = interval(3000).pipe(mapTo('medium one'));
//     const obs3 = interval(5000).pipe(mapTo('slow one'));

//     race(obs3, obs1, obs2)
//       .pipe(take(3))
//       .subscribe((winner) => {
//         console.log('comienza el race');
//         console.log(winner);
//         console.log('-----------');
//       });

//     const timer = interval(1000).pipe(take(4));
//     const sequence = range(1, 10);
//     let productosAmbosProveedores = [];
//     const concatOperators = concat(productoA, productoB);
//     concatOperators.subscribe((productos) => {
//       console.log('empieza el concat');
//       productos.forEach((prod) => {
//         productosAmbosProveedores.push(prod);
//       });
//       console.log(productosAmbosProveedores);
//     });

//     this.$generar = generate(
//       0,
//       (x) => x < 3,
//       (x) => x + 1
//     );
//     this.$generar.subscribe({
//       next: (value) => console.log(value),
//       complete: () => console.log('Complete!'),
//     });

//     const [evens$, odds$] = partition(productoA, (productos) => {
//       console.log(productos);
//       return productos.precio < 25;
//     });

//     odds$.subscribe((x) => console.log('odds', x));
//     evens$.subscribe((x) => console.log('evens', x));

//     this.productoB.subscribe((prod) => console.log(prod));
//     let sourcedata = [];
//     const source = of([1, 2, 3, 4, 5, 6]);

//     const numeros = source.pipe(mergeAll());
//     numeros.subscribe((x) => console.log(x));
//     const example = this.productoB.pipe(mergeAll()).subscribe({
//       next: (val) => {
//         console.log('mageall');
//         console.log(val);
//         sourcedata.push(val);
//       },
//       complete: () => console.log('complete marge', sourcedata),
//     });

// this.prodService
//   .getProdA()
//   .pipe(finalize(() => console.log('se finalizo por le finalize')))
//   .subscribe({
//     next: (producto) => console.log(producto),
//     complete: () => console.log('se a completado'),
//   });
// this.pruebaService.set(2);
// websocket
// this.web.sendMessage('hola');
// const concatenacion = concat(this.productoA, this.productoB);
// const time = interval(2500);
// const time2 = interval(500);
// const click$ = fromEvent(document, 'click');

// time2
//   .pipe(throttle((event) => this.productoB.pipe(delay(3000))))
//   .subscribe((noclick) => console.log('noclick'));
// time2.pipe(takeUntil(time)).subscribe(() => console.log('time'));
// concatenacion
//   .pipe(
//     scan((total, producto) => {
//       // console.log(total,'total');
//       // console.log(producto.precio ,'precio');
//       total += producto.precio;
//       return total;
//     }, 0),
//     takeLast(1)
//   )
//   .subscribe({
//     next: (total) => console.log(total),
//   });

//   const numbers$ = of(1, 2, 3);

//   numbers$
//     .pipe(
//       // Get the sum of the numbers coming in.
//       scan((total, n) => total + n),
//       // Get the average by dividing the sum by the total number
//       // received so var (which is 1 more than the zero-based index).
//       map((sum, index) => sum / (index + 1))
//     )
//     .subscribe();
