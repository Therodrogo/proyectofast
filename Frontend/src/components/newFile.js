import API from '@/api';
import Swal from 'sweetalert2';

export default (await import('vue')).defineComponent({
data() {
return {
active1: -1,
active2: -2
};
},
mounted() {

const personas = await API.getUsuarios();

},
props: {
nombreVotacion: ""
},
methods: {
votoHombre(index) {
this.active1 = index;

},
votoMujer(index) {
this.active2 = index;

},
volver() {
this.$store.state.item = false;
},
confirmarVoto() {

Swal.fire({
title: 'Estas seguro que deseas votar por:',
text: 'Persona 1   -   Persona 2',
showDenyButton: true,
confirmButtonText: 'Si',
denyButtonText: `No`,
}).then((result) => {

if (result.isConfirmed) {
Swal.fire({ title: 'Se ha eviado su elección', icon: 'success', toast: true, position: "top" });
this.$store.state.item = false;
}
});
}
}
});
