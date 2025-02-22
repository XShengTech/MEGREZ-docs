# 性能调优

::: tip 💡 提示
本章节仅根据 MEGREZ 开发团队在机器学习训练参数调优的经验，得到的一些调优建议，仅供参考
:::

## 训练参数优化

::: tip 💡 提示
需要配合[性能监控](/guide/usage/instances/monitor)使用
:::

众所周知，机器学习的训练效率取决于木桶效应，最短板决定了整体的训练效率。我们可以通过调整训练参数来优化训练效率。

尝试调整 `batch_size` 和 `num_workers` 的值，来找到最适合你硬件的配置。

- `batch_size`：每个批次的样本数量，通常越大越好，但要考虑显存的限制。
- `num_workers`：数据加载的线程数，通常越大越好，但要考虑 CPU 的限制。
- `pin_memory`：是否将数据加载到固定内存中，通常设置为 `True` 可以提高性能。

### 例子

例如从这个GPU 使用率的图中，波动很大，说明训练效率不高。

![低训练效率](/guide/usage/practice/performance1.webp)

此时，观察 CPU 使用率，如果 CPU 使用率不高，且内存占用不高，说明 CPU 是瓶颈，此时可以尝试增加 `num_workers` 的值。如果 CPU 使用率很高，说明 CPU 不是瓶颈，此时可以尝试调整 `batch_size` 的值。

调整后，GPU 使用率稳定在 100%，说明训练效率很高。

![高训练效率](/guide/usage/practice/performance2.webp)