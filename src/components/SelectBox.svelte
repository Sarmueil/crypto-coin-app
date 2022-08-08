<script lang="ts">
	import { countries, type countryResponse, currencies,CountryCoinValue } from '../stores';

	const a = {
		eur: ['22,014.83', '1,558.83', '0.4851878'],
		aed: ['82,764.21', '5,859.76', '1.8238648'],
		afn: ['2,039,426.55', '143,974.64', '45.08'],
		xcd: ['60,902.23', '4,299.43', '1.35'],
		all: ['2,583,651.47', '182,394.55', '207.83']
	};

	CountryCoinValue.set(a.eur);

	const handleSelectChange = (e: any) => {
		let selectedValue = e.target.value;
		currencies.set(selectedValue);

		if (selectedValue.toLowerCase() === 'aed') {
			CountryCoinValue.set(a.aed);
		}
		if (selectedValue.toLowerCase() === 'eur') {
			CountryCoinValue.set(a.eur);
		}
		if (selectedValue.toLowerCase() === 'afn') {
			CountryCoinValue.set(a.afn);
		}
		if (selectedValue.toLowerCase() === 'xcd') {
			CountryCoinValue.set(a.xcd);
		}
		if (selectedValue.toLowerCase() === 'all') {
			CountryCoinValue.set(a.all);
		}
	};

	let countryArray: countryResponse[] = [];

	countries.subscribe((value) => (countryArray = value));

	let arr: string[] = [];

	function filterCountry(countries: any): countryResponse[] {
		let arry: any[] = [];
		if (countries.length) {
			for (let i = 0; i < countries.length; i++) {
				if (!arr.includes(countries[i].currency)) {
					arr = [...arr, countries[i].currency];
					arry = [...arry, countries[i]];
					if (arry.length === 5) {
						return arry;
					}
				}
			}
		}
		return countries;
	}
</script>

<div class="w-[60%] mx-auto">
	<p class="text-[12px] text-[#D8BFD8]">Select your country</p>
	<div class="bg-[#f8f7ff] px-5 py-3 rounded-sm flex items-center">
		<img src="/images/search.png" alt="search_icon" />
		<select
			class="w-[100%] p-3 border-none outline-none bg-transparent cursor-pointer"
			on:change={handleSelectChange}
		>
			{#each filterCountry(countryArray) as count, index}
				<option value={count.currency}>{count.emoji} {count.name}</option>
			{/each}
		</select>
	</div>
</div>
