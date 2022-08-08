<script lang="ts">
	import { currencies, CountryCoinValue } from '../stores';
	import Card from './Card.svelte';

	export let streamObject: any;
	//  const { btcusdt, ethusdt, adausdt } = streamObject
	$: currenciesCode = $currencies;

	$: CoinValueArray = $CountryCoinValue;
</script>

<div class="flex items-center mx-auto">
	<div class="mt-4">
		<Card>
			<div class="flex p-2 items-center justify-between">
				<p class="uppercase text-[#6082B6] text-[14px] font-semibold">
					<!-- {streamObject?.btcusdt?.s ? streamObject?.btcusdt?.s : 'loading'} -->
					BTC/USDT
				</p>
				<p class="uppercase text-green-400 text-[14px]">
					{streamObject?.btcusdt?.P
						? `${parseFloat(streamObject?.btcusdt?.P).toFixed(2)}%`
						: 'loading'}
				</p>
			</div>
			<div class="p-2">
				<p class="text-[24px] text-[#191970] font-semibold">
					{streamObject?.btcusdt?.c ? parseFloat(streamObject?.btcusdt?.c).toFixed(2) : 'loading'}
				</p>
				<p class="text-[12px] text-[#191970] font-bold mt-1">
					Volume: {streamObject?.btcusdt?.v ? streamObject?.btcusdt?.v : 'loading'}
				</p>
			</div>
		</Card>
		<p class="ml-3 text-[12px] text-[#191970] font-bold">{currenciesCode} : {CoinValueArray[0]}</p>
	</div>

	<div class="mt-4">
		<Card>
			<div class="flex p-2 items-center justify-between">
				<p class="uppercase text-[#6082B6] text-[14px] font-semibold">
					<!-- {streamObject?.ethusdt?.s ? streamObject?.ethusdt?.s : 'loading'} -->
					ETH/USDT
				</p>
				<p class="uppercase text-green-400 text-[14px]">
					{streamObject?.ethusdt?.P
						? `${parseFloat(streamObject?.ethusdt?.P).toFixed(2)}%`
						: 'loading'}
				</p>
			</div>
			<div class="p-2">
				<p class="text-[24px] text-[#191970] font-semibold">
					{streamObject?.ethusdt?.c ? parseFloat(streamObject?.ethusdt?.c).toFixed(2) : 'loading'}
				</p>
				<p class="text-[12px] text-[#191970] font-bold mt-1">
					Volume: {streamObject?.ethusdt?.v ? streamObject?.ethusdt?.v : 'loading'}
				</p>
			</div>
		</Card>
		<p class="ml-3 text-[12px] text-[#191970] font-bold">{currenciesCode} : {CoinValueArray[1]}</p>
	</div>
	<div class="mt-4">
		<Card>
			<div class="flex p-2 items-center justify-between">
				<p class="uppercase text-[#6082B6] text-[14px] font-semibold">
					<!-- {streamObject?.adausdt?.s ? streamObject?.adausdt?.s : 'loading'} -->
					ADA/USDT
				</p>
				<p class="uppercase text-green-400 text-[14px]">
					{streamObject?.adausdt?.P
						? `${parseFloat(streamObject?.adausdt?.P).toFixed(2)}%`
						: 'loading'}
				</p>
			</div>
			<div class="p-2">
				<p class="text-[24px] text-[#191970] font-semibold">
					{streamObject?.adausdt?.c ? parseFloat(streamObject?.adausdt?.c).toFixed(2) : 'loading'}
				</p>
				<p class="text-[12px] text-[#191970] font-bold mt-1">
					Volume: {streamObject?.adausdt?.v ? streamObject?.adausdt?.v : 'loading'}
				</p>
			</div>
		</Card>
		<p class="ml-3 text-[12px] text-[#191970] font-bold">{currenciesCode} : {CoinValueArray[2]}</p>
	</div>
</div>
