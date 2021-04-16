.<template>
	<div class="pill">
		<span class="pill__name">{{ name }}</span>
		<span class="pill__amount">{{ amount }}</span>
	</div>
</template>

<script>
export default {
	name: 'Pill',
	props: ['name', 'amount']
};
</script>

<style scoped>
	.pill {
		height: 55px;
		min-width: 100px;

		margin: 10px;

		background-color: #dc143c;
		color: #fff;

		border-radius: 30px;

		font-size: 1.3rem;
		font-weight: bold;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.pill__name {
		margin-left: 15px;
	}

	.pill__amount {
		height: 35px;
		width: 35px;

		margin: 10px;
		padding: 5px;

		border-radius: 18px;

		background-color: #fff;
		color: #dc143c;

		font-size: 14px;

		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>