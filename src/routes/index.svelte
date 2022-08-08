<script lang="ts">
	import SelectBox from '../components/SelectBox.svelte';
	import CoinCards from '../components/CoinCards.svelte';
	import { onMount } from 'svelte';

	let ethSocket;
	let btcSocket;
	let adaSocket;

	$: btcStream = null;
	$: ethStream = null;
	$: adaStream = null;

	onMount(() => {
		ethSocket = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@ticker');
		btcSocket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
		adaSocket = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@ticker');
		btcSocket.onmessage = (event) => {
			btcStream = JSON.parse(event.data);
		};
		adaSocket.onmessage = (event) => {
			adaStream = JSON.parse(event.data);
		};
		ethSocket.onmessage = (event) => {
			ethStream = JSON.parse(event.data);
		};
	});

	$: streamObject = {
		ethusdt: ethStream,
		adausdt: adaStream,
		btcusdt: btcStream 
	};
</script>

<svelte:head>
	<title>Coin page</title>
</svelte:head>

<div class="m-5 rounded-lg h-[95vh] bg-[#f8f7ff] relative">
	<div
		class="bg-white rounded-lg w-[1030px] h-[600px] absolute top-[10%] left-[15%] shadow-lg py-[10%] px-10"
	>
		<SelectBox />
		<CoinCards {streamObject} />
	</div>
</div>

